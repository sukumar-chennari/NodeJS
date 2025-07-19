const fs=require('node:fs')

// read file 
const fileContent=fs.readFileSync('./file.txt','utf-8')
console.log(fileContent)

fs.readFile('./file.txt','utf-8',(err,data)=>{
    if(err) console.log(err)
        else console.log(data)
})

// write file 
fs.writeFileSync('./gree.txt','HEllo World ')

fs.writeFile('./green.txt','changed bro',(err)=>{
    if(err){
        console.log(err)
    }
        console.log('Data written')
})

fs.stat('file.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats);     // true
  console.log(stats.size);         // bytes
});
