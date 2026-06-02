const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'index-ePQC4kpM.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Importante section
const oldImportante = `y.jsxs("div",{className:"bg-red-50/50 border-t border-red-100 p-3 flex gap-3 items-start",children:[y.jsx(Zp,{className:"w-5 h-5 text-red-500 shrink-0 mt-0.5"}),y.jsxs("p",{className:"text-[10px] font-medium text-slate-600 leading-relaxed pr-2",children:[y.jsx("strong",{className:"text-red-600 uppercase tracking-wider",children:"Importante:"})," Los pagos se realizarán exclusivamente en las entidades bancarias donde ",a.companyName," tiene cuentas recaudadoras. Nunca entregues dinero en efectivo o deposites en cuentas de terceras personas distintas a ",a.companyName,"."]})]})`;
const newImportante = `y.jsxs("div",{className:"bg-red-50/50 border-t border-red-100 p-3 flex flex-col gap-2",children:[y.jsxs("div",{className:"flex gap-3 items-start",children:[y.jsx(Zp,{className:"w-5 h-5 text-red-500 shrink-0 mt-0.5"}),y.jsxs("p",{className:"text-[10px] font-medium text-slate-600 leading-relaxed pr-2",children:[y.jsx("strong",{className:"text-red-600 uppercase tracking-wider",children:"Importante:"})," Los pagos se realizarán exclusivamente en las entidades bancarias donde ",a.companyName," tiene cuentas recaudadoras. Nunca entregues dinero en efectivo o deposites en cuentas de terceras personas distintas a ",a.companyName,"."]})]}),(false && l)?y.jsxs("div",{className:"mt-2 bg-[#FFC914] p-3 rounded-lg text-center",children:[y.jsx("div",{className:"font-bold text-[11px] mb-1 text-black",children:"Inscríbete y forma parte de Proponte"}),y.jsx("p",{className:"text-[9px] mb-2 text-black",children:"Completa tu inscripción en Proponte y empieza a autofinanciar tus metas de manera organizada y accesible."}),y.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[y.jsxs("div",{className:"bg-white p-2 rounded",children:[y.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Scotiabank_Logo.svg/512px-Scotiabank_Logo.svg.png",className:"h-4 mx-auto mb-1",alt:"Scotiabank"}),y.jsx("p",{className:"text-[7px] text-gray-500",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"0005246623"}),y.jsx("p",{className:"text-[7px] text-gray-500 mt-1",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"009-170-000005246623 22"})]}),y.jsxs("div",{className:"bg-white p-2 rounded",children:[y.jsx("img",{src:"https://www.viabcp.com/wcm/connect/b16e10de-ecbd-43eb-8e2b-ff4190c42732/Logo+BCP+1.png?MOD=AJPERES",className:"h-4 mx-auto mb-1",alt:"BCP"}),y.jsx("p",{className:"text-[7px] text-gray-500",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"215-7356508-1-86"}),y.jsx("p",{className:"text-[7px] text-gray-500 mt-1",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"002 215 007356508186 23"})]}),y.jsxs("div",{className:"bg-white p-2 rounded",children:[y.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/BBVA_2019.svg/512px-BBVA_2019.svg.png",className:"h-4 mx-auto mb-1",alt:"BBVA"}),y.jsx("p",{className:"text-[7px] text-gray-500",children:"Cuenta corriente US$"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"0011-0131-0100064327-08"}),y.jsx("p",{className:"text-[7px] text-gray-500 mt-1",children:"Cuenta interbancaria"}),y.jsx("p",{className:"text-[8px] font-bold text-black",children:"011-131-000100064327-08"})]})]})]}):null]});`;
content = content.replace(oldImportante, newImportante);

// 2. Requisitos
content = content.replace(
  'className:"grid grid-cols-[1fr_1.2fr] gap-4 mb-3 mt-2"',
  'className:"grid grid-cols-[1fr_1.2fr] gap-3 mb-2 mt-1"'
);

// 3. Modalidades
content = content.replace(
  'className:"w-full bg-white border border-slate-200 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden p-4 mb-3 mt-0"',
  'className:"w-full bg-white border border-slate-200 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden p-3 mb-2 mt-0"'
);

// 4. Ejemplo de Remate
content = content.replace(
  'className:"w-full relative bg-white border border-slate-200 rounded-[12px] shadow-sm mb-6 overflow-hidden mt-0"',
  'className:"w-full relative bg-white border border-slate-200 rounded-[12px] shadow-sm mb-3 overflow-hidden mt-0"'
);

// 5. Ejecutivo Comercial -> Asesor de Ventas and size reduction
content = content.replace(
  'className:"flex items-center gap-6 bg-white p-6 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-50 pr-16 relative overflow-hidden max-w-[450px]"',
  'className:"flex items-center gap-4 bg-white p-4 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-50 pr-12 relative overflow-hidden max-w-[380px]"'
);

content = content.replace(
  'className:"w-[88px] h-[88px] rounded-full overflow-hidden border-[3px] border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-slate-100 flex items-center justify-center object-cover shrink-0 relative z-10"',
  'className:"w-[64px] h-[64px] rounded-full overflow-hidden border-[3px] border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-slate-100 flex items-center justify-center object-cover shrink-0 relative z-10"'
);

content = content.replace(
  'className:"text-[10px] font-bold text-blue-500 tracking-[0.2em] uppercase mb-1",children:"Ejecutivo Comercial"',
  'className:"text-[9px] font-bold text-blue-500 tracking-[0.2em] uppercase mb-0.5",children:"Asesor de Ventas"'
);

content = content.replace(
  'className:"font-extrabold text-[22px] text-[#1c2331] leading-tight tracking-tight uppercase mb-2"',
  'className:"font-extrabold text-[18px] text-[#1c2331] leading-tight tracking-tight uppercase mb-1"'
);

content = content.replace(
  'className:"w-full px-12 pb-8 flex items-center justify-between z-20 relative"',
  'className:"w-full px-10 pb-4 flex items-center justify-between z-20 relative"'
);

// 6. Pie de página RUC / Footer size reduction
content = content.replace(
  'className:"w-full flex bg-[#1e222b] text-white my-0 h-[56px] items-center"',
  'className:"w-full flex bg-[#1e222b] text-white my-0 h-[40px] items-center"'
);

content = content.replace(
  'className:"py-2 px-10 flex-1 text-[13px] font-black border-r border-white/10 text-center uppercase tracking-[0.2em]"',
  'className:"py-2 px-6 flex-1 text-[11px] font-black border-r border-white/10 text-center uppercase tracking-[0.2em]"'
);

content = content.replace(
  'className:"py-2 px-10 bg-[#13171d] font-black text-[15px] text-center shadow-inner tracking-widest min-w-[280px]"',
  'className:"py-2 px-6 bg-[#13171d] font-black text-[12px] text-center shadow-inner tracking-widest min-w-[200px]"'
);

fs.writeFileSync(filePath, content);
console.log('Replaced all components layout successfully.');
