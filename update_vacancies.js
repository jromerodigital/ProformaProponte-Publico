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

// Target the sl object declaration and replace it with the new values
const targetSL = `sl={GRUPO_002_P48:{id:"GRUPO_002_P48",name:"GRUPO 002",programa:"PRO_48",avance:22,plazoRestante:25,factor:1.1416,minCert:11e3,maxCert:22e3},GRUPO_003_P48:{id:"GRUPO_003_P48",name:"GRUPO 003",programa:"PRO_48",avance:24,plazoRestante:31,factor:1.1416,minCert:11e3,maxCert:22e3},GRUPO_005_P48:{id:"GRUPO_005_P48",name:"GRUPO 005",programa:"PRO_48",avance:26,plazoRestante:37,factor:1.1416,minCert:11e3,maxCert:22e3},GRUPO_006_P48:{id:"GRUPO_006_P48",name:"GRUPO 006",programa:"PRO_48",avance:32,plazoRestante:39,factor:1.1416,minCert:11e3,maxCert:22e3},GRUPO_001_P66:{id:"GRUPO_001_P66",name:"GRUPO 001",programa:"PRO_66",avance:23,plazoRestante:59,factor:1.1888,minCert:11e3,maxCert:22e3},GRUPO_002_P66:{id:"GRUPO_002_P66",name:"GRUPO 002",programa:"PRO_66",avance:45,plazoRestante:60,factor:1.1888,minCert:11e3,maxCert:22e3}}`;

const replacementSL = `sl={GRUPO_002_P48:{id:"GRUPO_002_P48",name:"GRUPO 002",programa:"PRO_48",avance:21,plazoRestante:25,factor:1.1416,minCert:11e3,maxCert:22e3},GRUPO_003_P48:{id:"GRUPO_003_P48",name:"GRUPO 003",programa:"PRO_48",avance:24,plazoRestante:31,factor:1.1416,minCert:11e3,maxCert:22e3},GRUPO_005_P48:{id:"GRUPO_005_P48",name:"GRUPO 005",programa:"PRO_48",avance:24,plazoRestante:37,factor:1.1416,minCert:11e3,maxCert:22e3},GRUPO_006_P48:{id:"GRUPO_006_P48",name:"GRUPO 006",programa:"PRO_48",avance:29,plazoRestante:39,factor:1.1416,minCert:11e3,maxCert:22e3},GRUPO_001_P66:{id:"GRUPO_001_P66",name:"GRUPO 001",programa:"PRO_66",avance:25,plazoRestante:59,factor:1.1888,minCert:11e3,maxCert:22e3},GRUPO_002_P66:{id:"GRUPO_002_P66",name:"GRUPO 002",programa:"PRO_66",avance:25,plazoRestante:60,factor:1.1888,minCert:11e3,maxCert:22e3}}`;

if (content.includes(targetSL)) {
  content = content.replace(targetSL, replacementSL);
  console.log('Successfully updated vacancies in sl object.');
} else {
  console.warn('Warning: sl object target not found.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done!');
