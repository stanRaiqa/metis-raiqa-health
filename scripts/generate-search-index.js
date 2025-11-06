const fs = require('fs');
const path = require('path');

// Directories to scan for plain text exports
const DIRECTORIES = [
  path.join(__dirname, '../app/sections'),
  path.join(__dirname, '../app/components'),
];

// File extensions to consider
const FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];

// Helper: Recursively get all files in a directory
function getAllFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, files);
    } else if (FILE_EXTENSIONS.includes(path.extname(fullPath))) {
      files.push(fullPath);
    }
  });
  return files;
}

// Helper: Try to extract plain text exports from a file
function extractPlainTextExports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const results = [];

  // Look for exported arrays/objects with question/answer, title/body, etc.
  // This is a simple regex-based approach for static data only
  const exportRegex = /export\s+(const|let|var)\s+(\w+)\s*=\s*([\[{][\s\S]*?\n});?/gm;
  let match;
  while ((match = exportRegex.exec(content)) !== null) {
    const varName = match[2];
    const value = match[3];
    // Try to find question/answer or title/body pairs
    const qaRegex = /question\s*:\s*['"`]([^'"`]+)['"`][,\n]\s*answer\s*:\s*['"`]([^'"`]+)['"`]/gi;
    const tbRegex = /title\s*:\s*['"`]([^'"`]+)['"`][,\n]\s*body\s*:\s*['"`]([^'"`]+)['"`]/gi;
    let qaMatch;
    while ((qaMatch = qaRegex.exec(value)) !== null) {
      results.push({
        id: `${path.basename(filePath, path.extname(filePath))}-${qaMatch[1].toLowerCase().replace(/\s+/g, '-')}`,
        title: qaMatch[1],
        body: qaMatch[2],
        page: '',
        sectionId: '',
        breadcrumbs: [],
        type: 'faq',
        tags: [],
      });
    }
    let tbMatch;
    while ((tbMatch = tbRegex.exec(value)) !== null) {
      results.push({
        id: `${path.basename(filePath, path.extname(filePath))}-${tbMatch[1].toLowerCase().replace(/\s+/g, '-')}`,
        title: tbMatch[1],
        body: tbMatch[2],
        page: '',
        sectionId: '',
        breadcrumbs: [],
        type: 'section',
        tags: [],
      });
    }
  }
  return results;
}

// Main
function main() {
  let allResults = [];
  for (const dir of DIRECTORIES) {
    if (!fs.existsSync(dir)) continue;
    const files = getAllFiles(dir);
    for (const file of files) {
      const results = extractPlainTextExports(file);
      if (results.length > 0) {
        allResults = allResults.concat(results);
      }
    }
  }
  // Write to search-index.json
  const outPath = path.join(__dirname, '../search-index.json');
  fs.writeFileSync(outPath, JSON.stringify(allResults, null, 2), 'utf8');
  console.log(`Wrote ${allResults.length} entries to search-index.json`);
}

main(); 