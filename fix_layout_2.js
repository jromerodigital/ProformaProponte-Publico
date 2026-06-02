const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'index-ePQC4kpM.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Reemplazar Importante para usar textos en vez de logos y reducir padding y tamaños
const oldImportante = `y.jsxs("div",{className:"bg-red-50/50 border-t border-red-100 p-3 flex flex-col gap-2",children:[y.jsxs("div",{className:"flex gap-3 items-start",children:[y.jsx(Zp,{className:"w-5 h-5 text-red-500 shrink-0 mt-0.5"}),y.jsxs("p",{className:"text-[10px] font-medium text-slate-600 leading-relaxed pr-2",children:[y.jsx("strong",{className:"text-red-600 uppercase tracking-wider",children:"Importante:"})," Los pagos se realizarán exclusivamente en las entidades bancarias donde ",a.companyName," tiene cuentas recaudadoras. Nunca entregues dinero en efectivo o deposites en cuentas de terceras personas distintas a ",a.companyName,"."]})]}),(false && l)?y.jsxs("div",{className:"mt-2 bg-[#FFC914] p-3 rounded-lg text-center",children:[y.jsx("div",{className:"font-bold text-[11px] mb-1 text-black",children:"Inscríbete y forma parte de Proponte"}),y.jsx("p",{className:"text-[9px] mb-2 text-black",children:"Completa tu inscripción en Proponte y empieza a autofinanciar tus metas de manera organizada y accesible."}),y.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[y.jsxs("div",{className:"bg-white p-2 rounded",children:[y.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Scotiabank_Logo.svg/512px-Scotiabank_Logo.svg.png",className:"h-4 mx-auto mb-1",alt:"Scotiabank"}),y.jsx("p",{className:"text-[7px] text-gray-500",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"0005246623"}),y.jsx("p",{className:"text-[7px] text-gray-500 mt-1",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"009-170-000005246623 22"})]}),y.jsxs("div",{className:"bg-white p-2 rounded",children:[y.jsx("img",{src:"https://www.viabcp.com/wcm/connect/b16e10de-ecbd-43eb-8e2b-ff4190c42732/Logo+BCP+1.png?MOD=AJPERES",className:"h-4 mx-auto mb-1",alt:"BCP"}),y.jsx("p",{className:"text-[7px] text-gray-500",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"215-7356508-1-86"}),y.jsx("p",{className:"text-[7px] text-gray-500 mt-1",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"002 215 007356508186 23"})]}),y.jsxs("div",{className:"bg-white p-2 rounded",children:[y.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/BBVA_2019.svg/512px-BBVA_2019.svg.png",className:"h-4 mx-auto mb-1",alt:"BBVA"}),y.jsx("p",{className:"text-[7px] text-gray-500",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"0011-0131-0100064327-08"}),y.jsx("p",{className:"text-[7px] text-gray-500 mt-1",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"011-131-000100064327-08"})]})]})]}):null]})`;

const newImportante = `y.jsxs("div",{className:"bg-red-50/50 border-t border-red-100 p-2 flex flex-col gap-1.5",children:[y.jsxs("div",{className:"flex gap-2 items-start",children:[y.jsx(Zp,{className:"w-4 h-4 text-red-500 shrink-0 mt-0.5"}),y.jsxs("p",{className:"text-[9px] font-medium text-slate-600 leading-tight pr-2",children:[y.jsx("strong",{className:"text-red-600 uppercase tracking-wider",children:"Importante:"})," Los pagos se realizarán exclusivamente en las entidades bancarias donde ",a.companyName," tiene cuentas recaudadoras. Nunca entregues dinero en efectivo o deposites en cuentas de terceras personas distintas a ",a.companyName,"."]})]}),(false && l)?y.jsxs("div",{className:"mt-0.5 bg-[#FFC914] p-1.5 rounded-lg text-center",children:[y.jsx("div",{className:"font-bold text-[10px] mb-1 text-black",children:"Inscríbete y forma parte de Proponte"}),y.jsxs("div",{className:"grid grid-cols-3 gap-1.5",children:[y.jsxs("div",{className:"bg-white py-1 px-1.5 rounded border border-[#FFC914]/20 shadow-sm",children:[y.jsx("p",{className:"text-[10px] font-black text-[#ED1C24] mb-0.5 uppercase tracking-widest leading-none",children:"Scotiabank"}),y.jsx("p",{className:"text-[6px] text-gray-500 uppercase leading-tight",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[7px] font-bold text-black leading-none mb-0.5",children:"0005246623"}),y.jsx("p",{className:"text-[6px] text-gray-500 uppercase leading-tight",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[7px] font-bold text-black leading-none",children:"009-170-000005246623 22"})]}),y.jsxs("div",{className:"bg-white py-1 px-1.5 rounded border border-[#FFC914]/20 shadow-sm",children:[y.jsx("p",{className:"text-[10px] font-black text-[#002A8D] mb-0.5 uppercase tracking-widest leading-none",children:"BCP"}),y.jsx("p",{className:"text-[6px] text-gray-500 uppercase leading-tight",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[7px] font-bold text-black leading-none mb-0.5",children:"215-7356508-1-86"}),y.jsx("p",{className:"text-[6px] text-gray-500 uppercase leading-tight",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[7px] font-bold text-black leading-none",children:"002 215 007356508186 23"})]}),y.jsxs("div",{className:"bg-white py-1 px-1.5 rounded border border-[#FFC914]/20 shadow-sm",children:[y.jsx("p",{className:"text-[10px] font-black text-[#072146] mb-0.5 uppercase tracking-widest leading-none",children:"BBVA"}),y.jsx("p",{className:"text-[6px] text-gray-500 uppercase leading-tight",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[7px] font-bold text-black leading-none mb-0.5",children:"0011-0131-0100064327-08"}),y.jsx("p",{className:"text-[6px] text-gray-500 uppercase leading-tight",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[7px] font-bold text-black leading-none",children:"011-131-000100064327-08"})]})]})]}):null]})`;

if (content.includes(oldImportante)) {
  content = content.replace(oldImportante, newImportante);
  console.log('Replaced Importante section');
} else {
  console.log('Could not find oldImportante');
}

// 2. Reduce global flex gaps in the second page to compress space
const oldFlexGap = `className:"w-full px-8 flex flex-col gap-6 flex-1 font-sans"`;
const newFlexGap = `className:"w-full px-8 flex flex-col gap-3 flex-1 font-sans"`;
if (content.includes(oldFlexGap)) {
  content = content.replace(oldFlexGap, newFlexGap);
  console.log('Replaced flex gap');
} else {
  console.log('Could not find oldFlexGap');
}

// 3. Reduce padding top of the second page container
const oldPt = `className:"w-[794px] h-[1123px] shrink-0 bg-white relative font-sans text-gray-800 flex flex-col pt-8"`;
const newPt = `className:"w-[794px] h-[1123px] shrink-0 bg-white relative font-sans text-gray-800 flex flex-col pt-6"`;
if (content.includes(oldPt)) {
  content = content.replace(oldPt, newPt);
  console.log('Replaced pt-8 to pt-6');
} else {
  console.log('Could not find oldPt');
}

fs.writeFileSync(filePath, content);
console.log('Done.');
