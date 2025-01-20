class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.password = password
        this.email = email
    }

    addcourse (){
    console.log(`A new course was added by ${this.username}`);
    
    }
     
}

const chai = new teacher("chai","gsksxklj",12323434)

chai.addcourse()

const masalaChai = new user("masalachai")
masalaChai.logMe()


