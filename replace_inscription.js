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

// Replace occurrence 1 (in the column)
// We add whitespace-nowrap to class to make sure it doesn't wrap and disorganize elements.
const target1 = `className:"text-[9px] text-slate-400 font-medium",children:["(~ ",a.inscriptionQuota>0&&a.certificateAmount>0?(a.inscriptionQuota/1.18/a.certificateAmount*100).toFixed(2):"4.00","% del cert. + IGV)"]`;
const replacement1 = `className:"text-[9px] text-slate-400 font-medium whitespace-nowrap",children:["(",a.inscriptionQuota>0&&a.certificateAmount>0?parseFloat((a.inscriptionQuota/1.18/a.certificateAmount*100).toFixed(2)):"4","%+IGV del valor del certificado)"]`;

// Replace occurrence 2 (in the details breakdown)
const target2 = `className:"text-[8px] text-slate-400 font-medium",children:["(",a.inscriptionQuota>0&&a.certificateAmount>0?(a.inscriptionQuota/1.18/a.certificateAmount*100).toFixed(2):"4.00","% del cert. + IGV)"]`;
const replacement2 = `className:"text-[8px] text-slate-400 font-medium whitespace-nowrap",children:["(",a.inscriptionQuota>0&&a.certificateAmount>0?parseFloat((a.inscriptionQuota/1.18/a.certificateAmount*100).toFixed(2)):"4","%+IGV del valor del certificado)"]`;

if (content.includes(target1)) {
  content = content.replace(target1, replacement1);
  console.log('Successfully replaced occurrence 1.');
} else {
  console.warn('Warning: Occurrence 1 target not found.');
}

if (content.includes(target2)) {
  content = content.replace(target2, replacement2);
  console.log('Successfully replaced occurrence 2.');
} else {
  console.warn('Warning: Occurrence 2 target not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
