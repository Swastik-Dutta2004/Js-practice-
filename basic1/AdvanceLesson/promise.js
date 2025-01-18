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
    console.log("The promise is ethire resolve or resjected"); 
})


const promisefive = new Promise (function(resolve,resject){
    setTimeout(function(){
    let error = true
    if(!error){
        resolve({username:"sawstik dutta",password:"1234556"})
    }
    else{
        resject('ERROR: some error has come')
    }        
    },1000)
});

async function consumepromiseFive(){
    const response = await promisefive
    console.log(response); 
}
    
