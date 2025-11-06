const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, 'sample.json');
const OUTPUT = path.join(__dirname, '../search-index.json');

function extractTextFromBlock(block) {
  let texts = [];
  if (!block) return texts;
  // Direct string fields
  ['heading', 'subheading', 'title', 'question', 'answer', 'body', 'label', 'description', 'text'].forEach(field => {
    if (typeof block[field] === 'string') texts.push(block[field]);
  });
  // Arrays of blocks (e.g., content, description)
  ['content', 'contactInfoDescription', 'emailDescription', 'officeInfoDescription'].forEach(field => {
    if (Array.isArray(block[field])) {
      block[field].forEach(item => {
        if (item.text) texts.push(item.text);
        if (item.children) {
          item.children.forEach(child => {
            if (child.text) texts.push(child.text);
          });
        }
      });
    }
  });
  // Recursively extract from nested arrays (e.g., menuItems, items)
  ['menuItems', 'items', 'faqs', 'blocks'].forEach(field => {
    if (Array.isArray(block[field])) {
      block[field].forEach(item => {
        texts = texts.concat(extractTextFromBlock(item));
      });
    }
  });
  return texts;
}

function main() {
  const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));
  const results = [];
  for (const page of data) {
    const pageSlug = page.slug && page.slug.current ? page.slug.current : '';
    const pageName = page.name || '';
    if (!Array.isArray(page.pageBuilder)) continue;
    for (const block of page.pageBuilder) {
      const texts = extractTextFromBlock(block);
      // Use heading/title/question as title, subheading/content/answer as body
      const title = block.heading || block.title || block.question || '';
      const body = block.subheading || block.content || block.answer || texts.join(' ') || '';
      if (!title && !body) continue;
      results.push({
        id: `${pageSlug}-${block._key}`,
        title: title,
        body: body,
        page: `/${pageSlug}`,
        sectionId: block._key,
        breadcrumbs: [pageName, block._type],
        type: block._type,
        tags: [],
      });
    }
  }
  fs.writeFileSync(OUTPUT, JSON.stringify(results, null, 2), 'utf8');
  console.log(`Wrote ${results.length} entries to search-index.json`);
}

main(); 