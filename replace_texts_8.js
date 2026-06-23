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

// 1. Replace subtext for COSTO TOTAL: "del certificado de compra" -> "de administración del fondo"
const targetSubtext = `children:"del certificado de compra"`;
const replacementSubtext = `children:"de administración del fondo"`;

if (content.includes(targetSubtext)) {
  content = content.replace(targetSubtext, replacementSubtext);
  console.log('Successfully replaced Costo Total subtext.');
} else {
  console.warn('Warning: Costo Total subtext target not found.');
}

// 2. Add the legal disclaimer footnote below the first footnote
const targetFootnote = `y.jsx("p",{className:"text-[9px] text-slate-400 mt-1 px-1 leading-normal text-left font-medium",children:l?\`*Proponte no cobra intereses como en un crédito bancario; cobramos un gasto de administración equivalente al \${a.proProgram==="PRO_48"?"12%":"16%"}+IGV del valor del certificado por la gestión del grupo (EAFC supervisada por la SMV).\`:\`*Maqui+ no cobra intereses como en un crédito bancario; cobramos una cuota de administración por la gestión del grupo de fondos colectivos (EAFC supervisada por la SMV).\`})`;

const replacementFootnote = `y.jsx("p",{className:"text-[9px] text-slate-400 mt-1 px-1 leading-normal text-left font-medium",children:l?\`*Proponte no cobra intereses como en un crédito bancario; cobramos un gasto de administración equivalente al \${a.proProgram==="PRO_48"?"12%":"16%"}+IGV del valor del certificado por la gestión del grupo (EAFC supervisada por la SMV).\`:\`*Maqui+ no cobra intereses como en un crédito bancario; cobramos una cuota de administración por la gestión del grupo de fondos colectivos (EAFC supervisada por la SMV).\`}),y.jsx("p",{className:"text-[7.5px] text-slate-400/90 mt-1 px-1 leading-normal text-left font-medium",children:l?\`*Proponte no es una entidad bancaria ni financiera, no otorga créditos directos, ni garantiza entregas inmediatas de dinero o inmuebles de forma independiente a los mecanismos de adjudicación regulados en el Contrato de Única Adhesión aprobado por la SMV. Somos un sistema de fondos colectivos regulado y supervisado por la SMV, lo que garantiza el respaldo y la seguridad de tu inversión a través del autofinanciamiento.\`:\`*Maqui+ no es una entidad bancaria ni financiera, no otorga créditos directos, ni garantiza entregas inmediatas de dinero o vehículos de forma independiente a los mecanismos de adjudicación regulados en el Contrato de Única Adhesión aprobado por la SMV. Somos una EAFC autorizada y supervisada por la SMV, brindándote una alternativa de autofinanciamiento vehicular o inmobiliario inteligente, segura y confiable.\`})`;

if (content.includes(targetFootnote)) {
  content = content.replace(targetFootnote, replacementFootnote);
  console.log('Successfully appended the legal disclaimer footnote.');
} else {
  console.warn('Warning: Footnote target not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
