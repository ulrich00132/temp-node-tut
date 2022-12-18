const http = require('http');

// The method we want to use here is CREATE A SERVER

// req = incoming request
// res = response. WHat we're sending back

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if(req.url === ('/about')) {
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href='/'>Back Home</a>
    `)
});

// 🚨 We absolutely need to say what port our server is gonna be listening to ?
server.listen(5001) //5000 is arbitrary