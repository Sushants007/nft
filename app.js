const http = require('http');
const { listeners } = require('process');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){res.write('Welcome to our Home page');}
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>oops</h1>
    <p> we cant seem to find</p>
    <a href ="/">back home </a>
    `)
   
})

server.listen(5000);