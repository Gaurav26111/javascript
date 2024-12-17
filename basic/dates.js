//  DATES

// const myDate = new Date()
// console.log(myDate);                        //2024-12-12T08:50:32.932Z
// console.log(myDate.toDateString());         //Thu Dec 12 2024
// console.log(myDate.toISOString());          //2024-12-12T08:50:32.932Z
// console.log(myDate.toJSON());               //2024-12-12T08:50:32.932Z
// console.log(myDate.toLocaleDateString());   //12/12/2024
// console.log(myDate.toLocaleString());       //12/12/2024,  8:50:32 AM
// console.log(myDate.toLocaleTimeString());   //8:50:32 AM
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate1 = new Date(2024,0,23,5,3)
// console.log(myCreatedDate1.toLocaleString())

// let myCreatedDate2 = new Date("2024-01-23")
// console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("01-17-2024")
// console.log(myCreatedDate3.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());

//console.log(Math.floor(Date.now()));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());
//`${newDate.getDay()} and the time is `

newDate.toLocaleString('default'{
    weekday: "long"
})