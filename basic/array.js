// Array

const myarr = [1,2,3,4,5,6,7,"Gaurav",true]
const myarr1 = [1,2,3,4,5]

const hero = ["saktiman","krish"]
const arr = new Array(1,2,3,4,5)
//console.log(myarr);

//  Array Method
// myarr1.push(6)
// myarr1.push(7)
// myarr1.pop()
// myarr1.unshift(3)//unshift put the value in the beginning
// myarr1.shift() // shift remove the value from starting

// console.log(myarr1.includes(8));
// console.log(myarr1.indexOf(9))
// console.log(myarr1.indexOf(3))

// const newArr = myarr1.join() // this mmethod convert array into string 
// console.log(myarr1);
// console.log(newArr);
// console.log(typeof newArr)

//     slice,  splice

console.log("A",myarr1)
const myn = myarr1.slice(1,3)
console.log(myn)
console.log("B", myarr1)

const myn1 = myarr1.splice(1,3)
console.log(myn1)
console.log("C", myarr1)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvel_heros = ["ironman","spiderman","thor"]
const dc_heros = ["batman","flash","superman"]

// marvel_heros.push(dc_heros)
//console.log(marvel_heros[3,1])
// console.log(marvel_heros)

//const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros)

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const another_array = [1,2,3,[4,5,6],7,[8,9,2,[4,3,6,1]]]
// const real_array = another_array.flat(Infinity)
// console.log(real_array)

console.log(Array.isArray("Gaurav"))
console.log(Array.from("Gaurav"))
console.log(Array.from({name: "hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4))