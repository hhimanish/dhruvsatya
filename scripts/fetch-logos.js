const fs = require('fs');
const path = require('path');
const https = require('https');

const domains = [
  "infosys.com", "airtel.in", "hdfcbank.com", "wipro.com", "larsentoubro.com", 
  "ibm.com", "adityabirla.com", "icicibank.com", "tata.com", "siemens.com", 
  "acclimited.com", "britannia.co.in", "licindia.in", "ntpc.co.in", "bergerpaints.com",
  "ushacomm.com", "voltas.com", "techmahindra.com", "bhel.com", "airindia.in",
  "ey.com", "sbi.co.in", "nokia.com", "vodafone.in", "kotaklife.com", "iocl.com", 
  "alstom.com", "axisbank.com", "ing.com", "sail.co.in", "reliance.com", "jci.com"
];

const dir = path.join(__dirname, '../public/images/logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

async function main() {
  console.log('Starting logo downloads with User-Agent...');
  let successCount = 0;
  for (const domain of domains) {
    const name = domain.split('.')[0];
    const dest = path.join(dir, `${name}.png`);
    const url = `https://logo.clearbit.com/${domain}?size=200`;
    
    console.log(`Downloading ${name}...`);
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (response.ok) {
        const buffer = await response.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        successCount++;
        console.log(`✓ Saved ${name}.png`);
      } else {
        console.log(`✗ Failed ${name} (${response.status})`);
      }
    } catch (e) {
      console.log(`✗ Error ${name}: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 800)); // 800ms delay to be safe
  }
  console.log(`Finished! Downloaded ${successCount}/${domains.length} logos.`);
}

main();
