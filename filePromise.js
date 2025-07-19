const { read } = require('node:fs')
const fs=require('node:fs/promises')

console.log('First')

async function readFile(){
    try{
            const data=await fs.readFile('./file.txt','utf-8')
    console.log('Second')
    console.log(data)
    }catch(e){
        console.log(e)
    }

}

readFile()
console.log('Third')