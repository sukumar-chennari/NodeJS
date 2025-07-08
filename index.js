let add=require('./sum')

let superHero=require('./superHero')

console.log('Hello world ')
console.log('ADD sum is : ', add(3,4))
const thor= new superHero
thor.setName('Thor')

let res=thor.getName()
console.log(res)

