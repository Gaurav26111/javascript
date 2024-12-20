// const coding = ["js", "rb", "c++", "py", "java", "cpp"]

// const result = coding.forEach( (item) => {
//     console.log(item);
//     return item;   // forEach not return anything this is only for showing
// } )

// console.log(result)

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num > 4 )

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

//const newNums = myNums.map( (num) => {return num + 10})
const newNums = myNums
                      .map( (num) => {return num * 10})
                    .map( (num) => num + 1)
                    .filter( (num) => num > 41)
console.log(newNums)