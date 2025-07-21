const http= require('node:http');
const server=http.createServer((req,res)=>{
    console.log('Request received',req);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
})

server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})