//  function sayMyName (){
//     console.log("s");
//     console.log("w");
//     console.log("a");
//     console.log("s");
//     console.log("t");
//     console.log("i");
//     console.log("k");
//  }
//  sayMyName()
 
// function addTwoNumber (number1,number2){
// console.log(number1 + number2);
//  }

//  addTwoNumber(2,4) 

// function addTwoNumber (number1,number2){
//     // let result = number1 + number2;    
//     return number1 +  number2; 
// }
// const result = addTwoNumber(4,6) 
//     console.log(result);

function loginuserMessage (username){
if (username===undefined){
console.log("please enter your username");
return
}
return `${username} just logged in`
}

console.log(loginuserMessage()) ;
