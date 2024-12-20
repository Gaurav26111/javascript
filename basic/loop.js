//     for of loop

const arr = [1,2,3,4,5]
for(const num of arr){
    //console.log(num)
}

const greetings = "hello world"
for(const greet of greetings){
    //console.log(`each charr is ${greet}`)
}

//  Maps

const map  = new Map();
map.set('In','India')
map.set('USA','Unoted States Of America')
map.set('Fr','France')
map.set('In','India')
//console.log(map)

for (const [key, value] of map) {
    //console.log(key, ":=>", value)
}

for(const key in map){  // we not iterate map by forin loop
    console.log(key)
}

const myobj = {
    'game1': 'NFS',
    'game2': 'asphalt'
}
// for(const [key,value] of myobj){    
//     //object is also iterate but not by this method 
//     //console.log(key, ':=>', value)  // object is ierate by another method
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++====

//   iterate on object
 
const obj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

for (const key in obj){
    //console.log(`${key} shortcut is for ${obj[key]}`)
}

const programming = ["js", "rb", "c++", "py", "java", "cpp"]
for(const key in programming){
    console.log(programming[key])
}