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

// 1. Title Block Replacement: "Sobrecosto Con" -> "¿Y por qué con [PROPONTE]?"
const targetTitle = `y.jsx("span",{className:"font-extrabold text-[12px] uppercase tracking-[0.15em] text-[var(--theme-primary)]",children:"Sobrecosto Con"}),y.jsx("span",{className:"bg-[var(--theme-accent)] text-[var(--theme-accent-text)] px-2 py-0.5 rounded-[4px] text-[10px] font-black tracking-widest flex items-center",children:l?"PROPONTE":y.jsxs(y.Fragment,{children:["MAQUI",y.jsx("span",{className:"text-[11px] ml-[1px]",children:"+"})]})})`;
const replacementTitle = `y.jsx("span",{className:"font-extrabold text-[12px] uppercase tracking-[0.15em] text-[var(--theme-primary)]",children:"¿Y por qué con"}),y.jsx("span",{className:"bg-[var(--theme-accent)] text-[var(--theme-accent-text)] px-2 py-0.5 rounded-[4px] text-[10px] font-black tracking-widest flex items-center",children:l?"PROPONTE":y.jsxs(y.Fragment,{children:["MAQUI",y.jsx("span",{className:"text-[11px] ml-[1px]",children:"+"})]})}),y.jsx("span",{className:"font-extrabold text-[12px] uppercase tracking-[0.15em] text-[var(--theme-primary)]",children:"?"})`;

if (content.includes(targetTitle)) {
  content = content.replace(targetTitle, replacementTitle);
  console.log('Successfully replaced Title.');
} else {
  console.warn('Warning: Title target not found.');
}

// 2. Column 3 Header Replacement: "Sobrecosto Total" -> "Costo Total"
const targetHeader = `y.jsx("span",{className:"text-[9px] font-bold text-slate-500 uppercase tracking-widest",children:"Sobrecosto Total"})`;
const replacementHeader = `y.jsx("span",{className:"text-[9px] font-bold text-slate-500 uppercase tracking-widest",children:"Costo Total"})`;

if (content.includes(targetHeader)) {
  content = content.replace(targetHeader, replacementHeader);
  console.log('Successfully replaced Column Header.');
} else {
  console.warn('Warning: Column Header target not found.');
}

// 3. Bottom Row Label Replacement: "Sobrecosto Total" -> "Costo Total del certificado de compra"
const targetRowLabel = `y.jsx("span",{className:"font-black text-[#131F3B] tracking-widest uppercase text-[11px]",children:"Sobrecosto Total"})`;
const replacementRowLabel = `y.jsxs("div",{className:"flex flex-col items-end leading-none",children:[y.jsx("span",{className:"font-black text-[#131F3B] tracking-widest uppercase text-[11px] mb-0.5",children:"Costo Total"}),y.jsx("span",{className:"text-[8px] text-slate-400 font-medium normal-case tracking-normal",children:"del certificado de compra"})]})`;

if (content.includes(targetRowLabel)) {
  content = content.replace(targetRowLabel, replacementRowLabel);
  console.log('Successfully replaced Bottom Row Label.');
} else {
  console.warn('Warning: Bottom Row Label target not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
