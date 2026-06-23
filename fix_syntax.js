const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
const files = fs.readdirSync(assetsDir);
const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));

if (!jsFile) {
  console.error('Could not find index-*.js file in assets/');
  process.exit(1);
}

const filePath = path.join(assetsDir, jsFile);
console.log('Found JS file:', filePath);
let content = fs.readFileSync(filePath, 'utf8');

// The incorrect part has "supervisada por la SMV).`},y.jsx("br",{}),"
const target = `supervisada por la SMV).\`},y.jsx("br",{}),`;
const replacement = `supervisada por la SMV).\`,y.jsx("br",{}),`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  console.log('Successfully fixed the syntax error (replaced curly brace with comma).');
} else {
  console.warn('Warning: Syntax target not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
