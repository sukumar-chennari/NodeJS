const fs=require('node:fs')

const readableStream=fs.createReadStream('./file.txt',{encoding:'utf-8',highWaterMark:1})
const writableStream=fs.createWriteStream('./file2.txt')

// readableStream.on('data',(chunk)=>{
//     console.log(chunk)
//     writableStream.write(chunk)
// })

readableStream.pipe(writableStream)
const zlib=require('node:zlib')

const glib=zlib.createGzip()
readableStream.pipe(glib).pipe(fs.createWriteStream('./file2.txt.gz'))