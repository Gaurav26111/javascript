// singleton
//Object.create()


// object literals

const mySym = Symbol("key1")
const mySym1 = Symbol("key2")

const jsUser = {
    "full_name": "Gaurav Kumar",
    mySym: "mykey",  // by this we not use symbol 
    [mySym1]: "mykey1",  // this is the correct way of using symbol
    name: "Gaurav",
    age: 23,
    location: "kerala",
    email: "gaurav@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Satuarday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full_name"])  //full_name can not be access by using dot this is the only way to access it
// console.log(jsUser.mySym) // we use it by dot because it is not symbol type
// console.log(jsUser[mySym1]) // this is only access by [] not dot because of it is symbol type
// jsUser.email = "kanishak@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "gauravkumar@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello, js user")
}
jsUser.greetingTwo = function(){
    console.log(`hello, js user ${this.full_name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())