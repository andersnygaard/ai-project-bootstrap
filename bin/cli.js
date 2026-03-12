#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const templateName = args[0] || 'default';
const targetDir = process.cwd();
const templatesDir = path.join(__dirname, '..', 'templates');
const templateDir = path.join(templatesDir, templateName);

if (!fs.existsSync(templateDir)) {
  const available = fs.readdirSync(templatesDir).filter(d =>
    fs.statSync(path.join(templatesDir, d)).isDirectory()
  );
  console.error(`\nError: Template "${templateName}" not found.`);
  console.error(`Available templates: ${available.join(', ')}\n`);
  process.exit(1);
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    if (fs.existsSync(dest)) {
      console.log(`  SKIP (exists): ${path.relative(targetDir, dest)}`);
      return;
    }
    fs.copyFileSync(src, dest);
    console.log(`  CREATE: ${path.relative(targetDir, dest)}`);
  }
}

console.log('');
console.log(`Bootstrapping AI project (template: ${templateName})...`);
console.log(`   Target: ${targetDir}`);
console.log('');

copyRecursive(templateDir, targetDir);

console.log('');
console.log('Done! Your AI project scaffold is ready.');
console.log('');
console.log('Next steps:');
console.log('  1. Edit .docs/specs.md with your project specification');
console.log('  2. Edit .claude/CLAUDE.md with your project details');
console.log('  3. Run /scan-project to generate your first tasks');
console.log('  4. Run /start-working to begin autonomous implementation');
console.log('');
