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

// 1. Replace '(en el banco intereses)' with '*En el banco lo llaman intereses'
const targetInterese = `y.jsx("span",{className:"text-[8px] text-slate-400 font-medium",children:'(en el banco intereses)'})`;
const replacementInterese = `y.jsx("span",{className:"text-[8px] text-slate-400 font-medium",children:'*En el banco lo llaman intereses'})`;

if (content.includes(targetInterese)) {
  content = content.replace(targetInterese, replacementInterese);
  console.log('Successfully replaced (en el banco intereses).');
} else {
  console.warn('Warning: (en el banco intereses) target not found.');
}

// 2. Add disclaimer text below the card container
const targetDisclaimer = `l?y.jsxs(y.Fragment,{children:["2.9% ",y.jsx("span",{className:"text-[10px] font-bold text-slate-700",children:"+ IGV"})]}):\`\${a.annualPercentage}%\`})]})]})`;
const replacementDisclaimer = `l?y.jsxs(y.Fragment,{children:["2.9% ",y.jsx("span",{className:"text-[10px] font-bold text-slate-700",children:"+ IGV"})]}):\`\${a.annualPercentage}%\`})]})]}),y.jsx("p",{className:"text-[7.5px] text-slate-400 mt-2 px-2 leading-relaxed text-left font-medium",children:l?\`*Proponte no cobra intereses como en un crédito bancario; cobramos un gasto de administración equivalente al \${a.proProgram==="PRO_48"?"12%":"16%"}+IGV del valor del certificado por la gestión del grupo (EAFC supervisada por la SMV).\`:\`*Maqui+ no cobra intereses como en un crédito bancario; cobramos una cuota de administración por la gestión del grupo de fondos colectivos (EAFC supervisada por la SMV).\`})`;

if (content.includes(targetDisclaimer)) {
  content = content.replace(targetDisclaimer, replacementDisclaimer);
  console.log('Successfully added disclaimer.');
} else {
  console.warn('Warning: disclaimer insertion target not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
