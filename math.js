// type 1
const  add =(a,b)=> {
    return a+b
}
// module.exports=add


// type 2 exports
// module.exports= (a,b)=>{
//     return a-b
// }


// type 3 exports
const  div=(a,b)=>{
    return a/b
}

const mul=(a,b)=>{
    return a*b
}

module.exports={add, div,mul}

// type 4- exports 
// module .exports.add= (a,b)=>{
//     return a+b
// }

// type 5 exports 
// exports.add=(a,b)=>{
//     return a+b
// }
 


