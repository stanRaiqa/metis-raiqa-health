const fs = require('fs');
const path = require('path');

const SEARCH_INDEX_PATH = path.join(__dirname, '../search-index.json');
const SECTIONS_DIR = path.join(__dirname, '../app/sections');
const APP_DIR = path.join(__dirname, '../app');
const OUTPUT_PATH = path.join(__dirname, '../search-index-with-routes.json');

// Helper: Recursively get all files in a directory
function getAllFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  });
  return files;
}

// Helper: Get route from page.tsx file path
function getRouteFromPageFile(pageFile) {
  const rel = path.relative(APP_DIR, pageFile);
  const parts = rel.split(path.sep);
  if (parts.length === 2 && parts[1] === 'page.tsx') return '/'; // root page
  if (parts[parts.length - 1] === 'page.tsx') {
    return '/' + parts.slice(0, -1).join('/');
  }
  return null;
}

function main() {
  const searchIndex = JSON.parse(fs.readFileSync(SEARCH_INDEX_PATH, 'utf8'));
  const sectionFiles = getAllFiles(SECTIONS_DIR).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));
  const pageFiles = getAllFiles(APP_DIR).filter(f => f.endsWith('page.tsx'));

  for (const entry of searchIndex) {
    let foundSectionFile = null;
    // 1. Find section file that references the slug (entry.page)
    for (const sectionFile of sectionFiles) {
      const content = fs.readFileSync(sectionFile, 'utf8');
      if (content.includes(entry.page.replace(/\//g, ''))) { // remove slashes for matching
        foundSectionFile = sectionFile;
        break;
      }
    }
    if (!foundSectionFile) {
      entry.nextPageRoute = null;
      continue;
    }
    // 2. Find all page.tsx files that import or use this section file
    let foundPageRoute = null;
    for (const pageFile of pageFiles) {
      const content = fs.readFileSync(pageFile, 'utf8');
      // Check for import by filename (without extension)
      const sectionBase = path.basename(foundSectionFile, path.extname(foundSectionFile));
      if (content.includes(sectionBase)) {
        foundPageRoute = getRouteFromPageFile(pageFile);
        break;
      }
    }
    entry.nextPageRoute = foundPageRoute;
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(searchIndex, null, 2), 'utf8');
  console.log(`Wrote ${searchIndex.length} entries to search-index-with-routes.json`);
}

main(); 