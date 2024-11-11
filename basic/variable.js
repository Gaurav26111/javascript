const accountId=23456;
let accountEmail="gaurav@gmal.com";
var accountPAssword="12345"
accountCity= "kerala";
let accountState;
//accountId=2  //not allowed

accountEmail="kanishak@gmail.com";
accountPAssword="2345"
accountCity="kochi"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPAssword,accountCity,accountState])