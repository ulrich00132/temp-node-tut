// THIS IS CALLBACK HELL => It's better to use .Promise
const { readFile, writeFile } = require('fs')

console.log('start');

// Read the file
readFile('./content/first.txt', 'utf-8', (err, result) => { //Important to add utf8 in the fonction
    if (err) {
        console.log(err);
        return // If there is an error, it will return null
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return // If there is an error, it will return null
        }
        const second = result;
        // Create a new file or ovewrite the existing file
        writeFile('./content/result-async.txt', 
        `Here is the result ${first}, ${second}`,
        (err, result) => {
            if(err) {
                console.log(err);
                return
            }
            console.log('done with this task'); //With a console.log(result), the return will be undifined
        })
    })
})
console.log('starting next task');



