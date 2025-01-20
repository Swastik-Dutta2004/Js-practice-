class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username ${this.username}`);
    }

    static cerateId(){
        return '123'
    }    
}
    const swastik = new user("swastik")
        console.log(swastik.cerateId());

    