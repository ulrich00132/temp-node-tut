// GLOBALS - NO WINDOW !!!!

// __dirname    - patch to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env when the program is being executed

console.log(__dirname);

setInterval(() => {
    console.log('Hello, World !');
}, 1000);