
let a=10
const b=20
var c=30

if(true){
    let a=1
    const b=2
    var c=3
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    username = "Gaurav"
    function two(){
        const web = "YouTube"
        console.log(username)
    }
    //console.log(web)
    two()
}
//one()

if(true){
    const user = "Gaurav"
    if(user === "Gaurav"){
        const web = " YouTube"
        //console.log(user+ web)
    }
    //console.log(web)
}
//console.log(user)

addone(3)
function addone(num){
    return num+1
}

addtwo(3)           //this is wrong method of access
const addtwo = function(num){
    return num+2
}
