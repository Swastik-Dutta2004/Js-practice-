class user {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword (){
        return `${this.password}abc`
    }
    changeUserName (){
        return `${this.username.toUpperCase()}`
    }

}
const chai = new user("swastik","duttassju@12e",123445)

console.log(chai.encryptPassword());
console.log(chai.changeUserName());


user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
console.log(chai.encryptPassword());
console.log(chai.changeUserName());
