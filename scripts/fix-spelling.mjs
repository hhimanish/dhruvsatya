import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(process.cwd(), 'src'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace all text variations
  content = content.replace(/Organizations/g, 'Organisations');
  content = content.replace(/Organization/g, 'Organisation');
  content = content.replace(/organizations/g, 'organisations');
  content = content.replace(/organization/g, 'organisation');
  content = content.replace(/Behavioral/g, 'Behavioural');
  content = content.replace(/behavioral/g, 'behavioural');
  content = content.replace(/Behavior/g, 'Behaviour');
  content = content.replace(/behavior/g, 'behaviour');
  content = content.replace(/behaviors/g, 'behaviours');
  content = content.replace(/Behaviors/g, 'Behaviours');

  // Fix up specific code strings that must remain US English
  content = content.replace(/href="\/solutions\/organisations/g, 'href="/solutions/organizations');
  content = content.replace(/"@type": "Organisation"/g, '"@type": "Organization"');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated spelling in: ${file}`);
  }
}
console.log("Done fixing spelling!");
