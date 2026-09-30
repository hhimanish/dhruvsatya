import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const srcDir = path.join(process.cwd(), 'src');
const contentDir = path.join(process.cwd(), 'content');

const files = fs.readdirSync(imagesDir);
const renames = [];

for (const file of files) {
  let newName = file;
  if (newName === 'Audiance.jpg') {
    newName = 'audience.jpg';
  } else if (newName.includes(' ')) {
    newName = newName.replace(/ /g, '-').toLowerCase();
  }
  
  if (newName !== file) {
    // Check if a file with the new name already exists and it's not a case-only rename
    if (file.toLowerCase() !== newName.toLowerCase() && fs.existsSync(path.join(imagesDir, newName))) {
      newName = newName.replace('.', '-new.');
    }
    renames.push({ old: file, new: newName });
    fs.renameSync(path.join(imagesDir, file), path.join(imagesDir, newName));
    console.log(`Renamed: ${file} -> ${newName}`);
  }
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json')) {
      results.push(file);
    }
  });
  return results;
}

const allFilesToUpdate = [...walk(srcDir), ...walk(contentDir)];

for (const file of allFilesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  for (const rename of renames) {
    // Replace exact occurrences like /images/Old Name.jpg with /images/new-name.jpg
    // and also encodeURI versions like /images/Old%20Name.jpg
    
    // E.g., src="/images/Team Conference.jpg"
    const oldPath1 = `/images/${rename.old}`;
    const oldPath2 = `/images/${encodeURIComponent(rename.old)}`;
    const newPath = `/images/${rename.new}`;

    content = content.split(oldPath1).join(newPath);
    content = content.split(oldPath2).join(newPath);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated references in: ${file}`);
  }
}

console.log('Image renaming complete.');
