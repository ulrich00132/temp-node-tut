const { readFileSync, writeFileSync } = require('fs')
// It would be the same this function below:
    // const fs = require('fs');
    // fs.read;
// 

console.log('start');

// Read the file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Create a new file or ovewrite the existing file
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, { flag: 'a' });

console.log('done with this task');
console.log('starting the next one');