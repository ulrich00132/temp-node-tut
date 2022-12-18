// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
// console.log(data);

require('./7-mind-grenade'); // When we hava function in a module, it will work even 
// tough the const el is not mentionned. It's not exporting something. It just about executing function.


sayHi('Susy');
sayHi(names.john);
sayHi(names.peter);