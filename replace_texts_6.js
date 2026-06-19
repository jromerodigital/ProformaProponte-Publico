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

// Target the previous disclaimer class and replace it with the standard text-[8px] class
const targetDisclaimer = `className:"text-[6.5px] text-slate-400/85 mt-1 px-1 leading-normal text-left font-medium"`;
const replacementDisclaimer = `className:"text-[8px] text-slate-400 mt-1 px-1 leading-normal text-left font-medium"`;

if (content.includes(targetDisclaimer)) {
  content = content.replace(targetDisclaimer, replacementDisclaimer);
  console.log('Successfully updated disclaimer to text-[8px] (same as inscription text).');
} else {
  console.warn('Warning: disclaimer target not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
