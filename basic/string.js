const name = "gaurav"
const repocount = 10

//console.log(name + repocount + " value")

console.log(`My name is ${name} and repo count is ${repocount}`)

const gameName = new String('nubra-Campar')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0,4)
// console.log(newString);

 const newString = gameName.substring(-11,4)//the negative value not work in substring if we put it take it as by default 0
 console.log(newString);

const anotherString = gameName.slice(-11,4);
console.log(anotherString);

const newStringOne = "          Gaurav       "

console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://Gaurav.com/Gaurav%20Kumar"

console.log(url.replace('%20',"-"))
console.log(url.includes('Gaurav'))
console.log(url.includes('kanishak'))

console.log(gameName.split("-"))