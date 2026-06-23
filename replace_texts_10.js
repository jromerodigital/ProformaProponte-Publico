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

// Target the entire div containing "Gastos Administrativos" and the sublabel, and replace it with just the "Gastos Administrativos" label
const target = `y.jsxs("div",{className:"py-1.5 px-6 flex flex-col justify-center items-end border-r border-slate-100 leading-none",children:[y.jsx("span",{className:"font-bold text-slate-600 tracking-[0.1em] uppercase text-[9px] mb-0.5",children:"Gastos Administrativos"}),y.jsx("span",{className:"text-[8px] text-slate-400 font-medium",children:'*En el banco lo llaman intereses'})]})`;

const replacement = `y.jsx("div",{className:"py-1.5 px-6 flex flex-col justify-center items-end border-r border-slate-100 leading-none",children:y.jsx("span",{className:"font-bold text-slate-600 tracking-[0.1em] uppercase text-[9px]",children:"Gastos Administrativos"})})`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  console.log('Successfully removed the bank interests sublabel.');
} else {
  console.warn('Warning: Target sublabel not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
