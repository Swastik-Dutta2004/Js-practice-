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

// myhero.swastik()
// myhero.swa()

//inhertance

const user = {
    name :"chai    ",
    email:"cfbdfkjdfdjsdbjd"
}

const Teacher = {
    makeViedo: true
}

const TeacherSupport = {
    isAvailable: false
}
const TAsupport = {
    makeAssigmnt: "Js assignment",
    fullTime: true,
    __proto__:TeacherSupport
}

Teacher.__proto__ = user

//morden system

Object.setPrototypeOf(TeacherSupport,Teacher)

let anothertype = "chiaaurcode   "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anothertype.truelength()
"swastik".truelength()
"briyani".truelength()