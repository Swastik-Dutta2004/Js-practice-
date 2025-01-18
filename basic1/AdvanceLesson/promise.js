const promiseOne = new Promise (function(resolve,reject){

    setTimeout(function(){
        console.log("asyn task is compelete");
        resolve()      
    },1000)
})

promiseOne.then(function(){
    console.log("promise is consumed");
})


new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("aysn task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("aysn 2 resolve");
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username :"swastik",email:"swastik@#14@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,resject){
    setTimeout(function(){
       let error = true
       if(!error){
        resolve({username:"swastik the goat",password:"12345"})
       }
       else{
        resject("ERROR:something went wrong")
       }
    },1000)
})

promisefour.then(function(user){
        console.log(user);
        return user.username
    })
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is ethire resolve or rejected"); 
})


const promisefive = new Promise (function(resolve,resject){
    setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"swastik dutta",password:"1234556"})
    }
    else{
        resject('ERROR: some error has came.')
    }        
    },1000)
});

async function consumepromiseFive(){
    try {
        const response = await promisefive
        console.log(response);  
    } catch (error) {
        console.log(error);
        
    }
}
consumepromiseFive()

// async function getAllUser(){
//     try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E:',error);
        
//     }
// }
    // getAllUser()

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })