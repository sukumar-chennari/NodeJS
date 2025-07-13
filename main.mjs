
// import add from './math.mjs'

// let res=add(1,2)
// console.log("Addtion of ESMODule fiel is :", res)



// import add from './math.mjs'
// let res2=add(40,5)
// console.log('ESMODULE type2 add : ', res2)


import  math from './math.mjs'
const {add,sub}=math
let res3= add(100,200)
// console.log('ESMODULE type 3 add :', res3)


import * as math from './math.mjs'
let prod=math.mul(2,18)
console.log('Named export mul res: ', prod)

