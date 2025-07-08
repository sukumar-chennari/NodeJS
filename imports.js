// type 1- Import
const add=require('./math')
console.log('The sum of 2 numbers is :',add.add(10,45));

// type 2 - import 
const sub=require('./math')
// console.log('Substraction of 2 numbers is :', sub(2,1));

// type 3- import
const math=require('./math')

const {div,mul}=math

console.log('The division of 2 nubmers is :', div(30,2));
console.log('The  multiplication of 2 numbers is :', mul(100,2));
