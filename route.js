const http=require('node:http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home Page')
    }else if(req.url==='/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About Page')
    }else if(req.url==='/contact'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact Page')
    }else{
        res.writeHead(404);
        res.end('404 Not Found')
    }
})

server.listen(6969,()=>{
    console.log('Server is running on http://localhost:6969');
})