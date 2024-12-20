const user = {
    username: "Gaurav",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to the  website`);
        //console.log(this)
    }
}

user.welcomeMessage()
user.username = "aishu"
user.welcomeMessage()

//console.log(this)

// function chai(){
//     let name = "Gaurav"
//     console.log(this.name)
// }
// chai()

// function chai1(){
//     console.log(this)
// }
// chai1()

// const chai = () => {
//     let name = "Gaurav"
//     console.log(this.name)
//     console.log(this)
// }

// chai()

// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(5,2))

// const addtwo = (num1,num2) =>  num1+num2
// console.log(addtwo(5,2))

//const addtwo = (num1,num2) =>  ( num1 + num2 )   // if we use curly braces then we musst have to use return

const addtwo = (num1,num2) =>  ({username: "Gaurav"})
console.log(addtwo(5,2))  // but we not use curly braces and only use parenthesis then there is no need of return
