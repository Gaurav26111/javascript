// primitive

// 7 types  :  String, Number, Boolean, ,null, undefined, Symbol, BigInt

const score = 100
const scoreValue=100.43

const isLoggedIn=false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);


const bigNumber = 123456789987654n



//reference (non primitive)

//Array, Object, Functions

const  heros = ["saktiman", "naagraj", "doga"]

let myObj = {
    name : "Gaurav",
    age : 23,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack  (Primitive)   Heap  (non-primitive)
 

let myYoutubename = "Gaurav "

let anothername = myYoutubename
anothername = "kanishak"

console.log(myYoutubename);
console.log(anothername);

let user = {
    email : "gaurav@gmail.com",
    upi : "user@ybl"
}

let user2 = user

user2.email = "kanishak@gmail.com";
console.log(user.email);
console.log(user2.email);


