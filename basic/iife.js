//   Imediately Invoked Function Expressions

(function chai(){
    console.log("DB Connected")
})();
// iife not understand where it have to stop function so it last we have to use semi-volon(;)
( (name) => {
    console.log("DB Connected two ${name}")
})("Gaurav");


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// true, 1, " ", [], "false", "0",  {}, function(){}