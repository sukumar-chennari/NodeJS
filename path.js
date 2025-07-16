const path=require('path');


console.log(__filename)
console.log(__dirname)

console.log(path.basename(__filename)) // path.js
console.log(path.basename(__dirname)) // current directory

console.log(path.extname(__filename))
console.log(path.extname(__dirname)) // empty string

console.log(path.parse(__filename)) 
console.log(path.parse(__dirname)) // directory path


console.log(path.format(path.parse(__filename))) // reconstructs the path from the parsed object
console.log(path.isAbsolute(__filename)) // true
console.log(path.isAbsolute('import.js')) // true


console.log(path.join('folder1', 'folder2', 'file.txt')) // joins the paths with the platform-specific separator

console.log(path.resolve('f1', 'f2', 'file.txt')) // resolves to an absolute path based on the current working directory