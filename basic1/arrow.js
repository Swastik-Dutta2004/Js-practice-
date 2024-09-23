const user = {
    username: "swastik",
    price: 999,

    welcomemessage:function(){
        // console.log(`${this.username},welcome to our website`);
        // console.log(this);
        
    }
} 
 user.welcomemessage()
user.username = "bulet"
user.welcomemessage()
// console.log(this);

// function chai (){
//     let username = "swastik"
//     console.log(this.username);   

// }
// chai()

const chai = () => {
    let username =  "swastik"
    // console.log(this);
    
}
chai()

const addaTwo = (num1,num2) => {
    return num1 + num2;
}
// console.log(addaTwo(25,50));

// const addOne = (num1,num2) =>  
//     num1 + num2

// console.log(addOne(25,50));

const addOne = (num1,num2) =>  
({username: "swastik"})

console.log(addOne());