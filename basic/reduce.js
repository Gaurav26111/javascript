const myNums = [1,2,3]

// const newNums = myNums.reduce( function (acc, curval) {
//     console.log(`acc: ${acc} and curval : ${curval}`)
//     return acc + curval
// })
// const newNums = myNums.reduce( function (acc, curval) {
//     console.log(`acc: ${acc} and curval : ${curval}`)
//     return acc + curval
// },0)
// const newNums = myNums.reduce( function (acc, curval) {
//     console.log(`acc: ${acc} and curval : ${curval}`)
//     return acc + curval
// },3)

const newNums = myNums.reduce( (acc,curval) => acc + curval, 0)
console.log(newNums)

const shopping_cart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 1299
    }
]

const price_pay = shopping_cart.reduce( (acc,item)=> acc + item.price, 0)
console.log(price_pay)