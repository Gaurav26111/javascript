function sayMyName(){
    console.log("G")
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

//sayMyName()

// function addTwoNumber(num1, num2){
//     console.log(num1+num2)
// }

// addTwoNumber(2,4)

function addTwoNumber(num1, num2){
    return num1 + num2
}

// const result = addTwoNumber(2,4)
// console.log(result)
// console.log(addTwoNumber(4,7))

// function loginUserMessage(username){
//     return `${username} just logIn`
// }

// const res = loginUserMessage("Gaurav")
// console.log(res)

// function loginUserMessage(username){
//     return `${username} just logIn`
// }

// console.log(loginUserMessage("Gaurav"));



// function loginUserMessage(username){
//     return `${username} just logIn`
// }

// console.log(loginUserMessage(""));

// function loginUserMessage(username){
//     return `${username} just logIn`
// }

// console.log(loginUserMessage());

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter valid user name")
//         return
//     }
//     return `${username} just logIn`
// }

// console.log(loginUserMessage());

// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log("please enter valid user name")
//         return
//     }
//     return `${username} just logIn`
// }

// console.log(loginUserMessage());

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter valid user name")
        return
    }
    return `${username} just logIn`
}

//console.log(loginUserMessage("Gaurav"));

function calculateCartPrice(...num1){  //... this is rest operator it convert all the value in the array
    return num1
}

//console.log(calculateCartPrice(122,300,33,4,5,503))

const user = {
    userName: "aishu",
    price: 399
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and her price is ${anyObject.price}`)
}

//handleObject(user)

handleObject({
    userName: "meenu",
    price: 199
})

const myArr = [100,200,300,400,500,600]

function returnsecondvalue(getArr){
    return getArr[1]
}

//console.log(returnsecondvalue(myArr))
