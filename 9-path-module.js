// Few Built-in Modules ⬇️
// path => allows us to interact with the file system
const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);