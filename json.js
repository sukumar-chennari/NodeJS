const http=require('node:http')

const server=http.createServer((req,res)=>{
    
    const superHero={
        firstName: 'Peter',
        lastName: 'Parker',
        age: 25,
        powers: ['Spider-Sense', 'Wall-Crawling', 'Super Strength']
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(superHero));
})

server.listen(5000,()=>{
    console.log('Server is running on http://localhost:3000');
})