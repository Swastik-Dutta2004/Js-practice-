// let myName = "swastik"
// let myInstaID = "itsSwastik"

// console.log(myName.length);

let myhero = ["thor","spiderman"]

let heropower = {
    thor: "hammer",
    spiderman:"spider string",
    
    getspiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);  
    }
}
Object.prototype.swastik = function(){
    console.log(`sawstik is present in every object`);
    
}

Array.prototype.swa = function(){
    console.log(`he is everywhere`);
    
}

myhero.swastik()
myhero.swa()