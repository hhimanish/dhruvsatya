import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import axe from 'axe-core';

// Ensure we are using dynamic imports for lighthouse to avoid commonjs/esm issues if any.
const routes = [
  '/', '/about', '/solutions', '/solutions/organizations', '/solutions/leaders', 
  '/solutions/institutions', '/programs', '/method', '/founder', '/impact', 
  '/analyzer', '/insights', '/insights/rethinking-leadership-post-pandemic', 
  '/insights/the-myth-of-motivation', '/insights/building-safety-culture', 
  '/insights/awakening-the-giant-within-you', '/insights/the-psychology-of-sales', 
  '/insights/institutional-excellence-faculty', '/contact', '/privacy', '/terms', '/sitemap'
];

const viewports = [
  { width: 320, height: 800 },
  { width: 375, height: 800 },
  { width: 414, height: 800 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1280, height: 800 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 }
];

const BASE_URL = 'http://localhost:3002';
const OUT_DIR = path.join(process.cwd(), 'audit', 'before');

async function runAudit() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  console.log('Starting Playwright...');
  const browser = await chromium.launch();
  
  for (const route of routes) {
    const url = `${BASE_URL}${route}`;
    const safeRoute = route === '/' ? 'home' : route.replace(/\//g, '-').replace(/^-/, '');
    const routeDir = path.join(OUT_DIR, safeRoute);
    
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    console.log(`\nAuditing route: ${route}`);

    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      console.log(`  Navigating to ${url}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Run Axe
      console.log(`  Running Axe accessibility check...`);
      await page.addScriptTag({ content: axe.source });
      const axeResults = await page.evaluate(async () => {
        // @ts-ignore
        return await window.axe.run();
      });
      fs.writeFileSync(path.join(routeDir, 'axe-results.json'), JSON.stringify(axeResults, null, 2));
      console.log(`  Axe found ${axeResults.violations.length} violations.`);

      // Take screenshots
      for (const vp of viewports) {
        console.log(`  Taking screenshot at ${vp.width}x${vp.height}...`);
        await page.setViewportSize(vp);
        // Wait a tiny bit for layout to settle
        await page.waitForTimeout(500);
        await page.screenshot({ 
          path: path.join(routeDir, `screenshot-${vp.width}.png`), 
          fullPage: true 
        });
      }
    } catch (err) {
      console.error(`  Failed to audit ${route}:`, err.message);
    } finally {
      await context.close();
    }
  }

  await browser.close();
  console.log('\nAudit complete! Note: Lighthouse was skipped in this quick script to save time, we will rely on Playwright and Axe for the baseline.');
}

runAudit().catch(console.error);
