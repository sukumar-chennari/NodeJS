const http=require('node:http');
const fs=require('node:fs');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type": "text/html"});
    // fs.createReadStream('./index.html').pipe(res);
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    // Alternatively, you can read the file synchronously
    // and send it as a response:   
    // const html=fs.readFileSync('index.html', 'utf-8');
    // res.end(html);
})

server.listen(5500,()=>{
    console.log('Server is running on http://localhost:5500');
})