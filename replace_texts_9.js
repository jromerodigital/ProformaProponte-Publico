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

// Target the two separate <p> tags and replace them with a single <p> tag containing a <br /> for single line spacing
const targetFootnotes = `y.jsx("p",{className:"text-[9px] text-slate-400 mt-1 px-1 leading-normal text-left font-medium",children:l?\`*Proponte no cobra intereses como en un crédito bancario; cobramos un gasto de administración equivalente al \${a.proProgram==="PRO_48"?"12%":"16%"}+IGV del valor del certificado por la gestión del grupo (EAFC supervisada por la SMV).\`:\`*Maqui+ no cobra intereses como en un crédito bancario; cobramos una cuota de administración por la gestión del grupo de fondos colectivos (EAFC supervisada por la SMV).\`}),y.jsx("p",{className:"text-[7.5px] text-slate-400/90 mt-1 px-1 leading-normal text-left font-medium",children:l?\`*Proponte no es una entidad bancaria ni financiera, no otorga créditos directos, ni garantiza entregas inmediatas de dinero o inmuebles de forma independiente a los mecanismos de adjudicación regulados en el Contrato de Única Adhesión aprobado por la SMV. Somos un sistema de fondos colectivos regulado y supervisado por la SMV, lo que garantiza el respaldo y la seguridad de tu inversión a través del autofinanciamiento.\`:\`*Maqui+ no es una entidad bancaria ni financiera, no otorga créditos directos, ni garantiza entregas inmediatas de dinero o vehículos de forma independiente a los mecanismos de adjudicación regulados en el Contrato de Única Adhesión aprobado por la SMV. Somos una EAFC autorizada y supervisada por la SMV, brindándote una alternativa de autofinanciamiento vehicular o inmobiliario inteligente, segura y confiable.\`})`;

const replacementFootnotes = `y.jsxs("p",{className:"text-[9px] text-slate-400 mt-1 px-1 leading-normal text-left font-medium",children:[l?\`*Proponte no cobra intereses como en un crédito bancario; cobramos un gasto de administración equivalente al \${a.proProgram==="PRO_48"?"12%":"16%"}+IGV del valor del certificado por la gestión del grupo (EAFC supervisada por la SMV).\`:\`*Maqui+ no cobra intereses como en un crédito bancario; cobramos una cuota de administración por la gestión del grupo de fondos colectivos (EAFC supervisada por la SMV).\`},y.jsx("br",{}),l?\`*Proponte no es una entidad bancaria ni financiera, no otorga créditos directos, ni garantiza entregas inmediatas de dinero o inmuebles de forma independiente a los mecanismos de adjudicación regulados en el Contrato de Única Adhesión aprobado por la SMV. Somos un sistema de fondos colectivos regulado y supervisado por la SMV, lo que garantiza el respaldo y la seguridad de tu inversión a través del autofinanciamiento.\`:\`*Maqui+ no es una entidad bancaria ni financiera, no otorga créditos directos, ni garantiza entregas inmediatas de dinero o vehículos de forma independiente a los mecanismos de adjudicación regulados en el Contrato de Única Adhesión aprobado por la SMV. Somos una EAFC autorizada y supervisada por la SMV, brindándote una alternativa de autofinanciamiento vehicular o inmobiliario inteligente, segura y confiable.\`]})`;

if (content.includes(targetFootnotes)) {
  content = content.replace(targetFootnotes, replacementFootnotes);
  console.log('Successfully combined the footnotes into a single paragraph.');
} else {
  console.warn('Warning: Footnotes target not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
