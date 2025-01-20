function setUserName (username){
    this.username = username
}

function createUser (username,email,password){
    setUserName.call(this,username)
    
        this.email = email,
        this.password = password
}

const chai = new createUser("chai","ysjsgsbc",122334)
console.log(chai);
