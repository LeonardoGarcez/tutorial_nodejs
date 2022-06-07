const path = require('path');

console.log(path.sep);

const absolute = path.resolve(__dirname,'nome_subpasta', 'nome_outra_subpasta', 'arquivo.txt');
console.log(absolute);