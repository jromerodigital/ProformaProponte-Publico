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

// 1. Replace the header: "¿Y por qué con PROPONTE ?" / "¿Y por qué con MAQUI+ ?"
const targetHeader = `y.jsx("span",{className:"font-extrabold text-[12px] uppercase tracking-[0.15em] text-[var(--theme-primary)]",children:"¿Y por qué con"}),y.jsx("span",{className:"bg-[var(--theme-accent)] text-[var(--theme-accent-text)] px-2 py-0.5 rounded-[4px] text-[10px] font-black tracking-widest flex items-center",children:l?"PROPONTE":y.jsxs(y.Fragment,{children:["MAQUI",y.jsx("span",{className:"text-[11px] ml-[1px]",children:"+"})]})}),y.jsx("span",{className:"font-extrabold text-[12px] uppercase tracking-[0.15em] text-[var(--theme-primary)]",children:"?"})`;

const replacementHeader = `y.jsx("span",{className:"font-extrabold text-[12px] uppercase tracking-[0.15em] text-[var(--theme-primary)]",children:"¿Cómo se compone el costo del programa?"})`;

if (content.includes(targetHeader)) {
  content = content.replace(targetHeader, replacementHeader);
  console.log('Successfully updated the header.');
} else {
  console.warn('Warning: Header target not found.');
}

// 2. Add asterisk (**) to "Monto de Certificado de Compra" dark banner
const targetBanner = `className:"font-extrabold text-[13px] uppercase tracking-widest text-white",children:"Monto de Certificado de Compra"`;
const replacementBanner = `className:"font-extrabold text-[13px] uppercase tracking-widest text-white",children:l?"Monto de Certificado de Compra (**)":"Monto de Certificado de Compra (**)"`;

if (content.includes(targetBanner)) {
  content = content.replace(targetBanner, replacementBanner);
  console.log('Successfully added (**) to the dark banner header.');
} else {
  console.warn('Warning: Dark banner header target not found.');
}

// 3. Add asterisk (**) to "Certificado de Compra" row
const targetCertRow = `className:"font-bold text-slate-600 tracking-[0.1em] uppercase text-[9px]",children:"Certificado de Compra"`;
const replacementCertRow = `className:"font-bold text-slate-600 tracking-[0.1em] uppercase text-[9px]",children:l?"Certificado de Compra (**)":"Certificado de Compra (**)"`;

if (content.includes(targetCertRow)) {
  content = content.replace(targetCertRow, replacementCertRow);
  console.log('Successfully added (**) to the Certificado de Compra row.');
} else {
  console.warn('Warning: Certificado de Compra row target not found.');
}

// 4. Add asterisk (*) to "Gastos Administrativos" row
const targetAdminRow = `className:"font-bold text-slate-600 tracking-[0.1em] uppercase text-[9px]",children:"Gastos Administrativos"`;
const replacementAdminRow = `className:"font-bold text-slate-600 tracking-[0.1em] uppercase text-[9px]",children:l?"Gastos Administrativos (*)":"Gastos Administrativos (*)"`;

if (content.includes(targetAdminRow)) {
  content = content.replace(targetAdminRow, replacementAdminRow);
  console.log('Successfully added (*) to the Gastos Administrativos row.');
} else {
  console.warn('Warning: Gastos Administrativos row target not found.');
}

// 5. Replace footnotes dynamically using start and end tags
const searchStart = 'y.jsxs("p",{className:"text-[9px] text-slate-400 mt-1 px-1 leading-normal text-left font-medium"';
const startIndex = content.indexOf(searchStart);

if (startIndex !== -1) {
  const endIndex = content.indexOf(']})', startIndex) + 3;
  const oldFootnotesBlock = content.substring(startIndex, endIndex);
  
  const newFootnotesBlock = `y.jsxs("p",{className:"text-[9px] text-slate-400 mt-1 px-1 leading-normal text-left font-medium",children:[l?\`(*) PROPONTE no cobra intereses. El importe mostrado como “Gastos Administrativos” corresponde a la retribución por la administración y gestión del grupo de fondos colectivos, de conformidad con las condiciones establecidas en el Contrato de Adhesión y la normativa aplicable.\`:\`(*) Maqui+ no cobra intereses como en un crédito bancario; cobramos una cuota de administración por la gestión del grupo de fondos colectivos (EAFC supervisada por la SMV).\`},y.jsx("br",{}),l?\`(**) PROPONTE S.A.C. EAFC es una Empresa Administradora de Fondos Colectivos supervisada por la Superintendencia del Mercado de Valores (SMV). No es una entidad bancaria ni financiera, no otorga créditos directos y no garantiza la entrega inmediata de dinero, vehículos o inmuebles. La obtención del Certificado de Compra se realiza mediante los mecanismos de adjudicación previstos en el Contrato de Adhesión aprobado por la SMV.\`:\`(**) Maqui+ no es una entidad bancaria ni financiera, no otorga créditos directos, ni garantiza entregas inmediatas de dinero o vehículos de forma independiente a los mecanismos de adjudicación regulados en el Contrato de Única Adhesión aprobado por la SMV. Somos una EAFC autorizada y supervisada por la SMV, brindándote una alternativa de autofinanciamiento vehicular o inmobiliario inteligente, segura y confiable.\`]})`;
  
  content = content.replace(oldFootnotesBlock, newFootnotesBlock);
  console.log('Successfully updated the footnotes dynamically.');
} else {
  console.warn('Warning: Footnote start tag not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
