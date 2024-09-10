
const mysym = Symbol ("key1")

const Jsuser = {
    name: "swastik",
    age: 19,
    [mysym]: "mykey1",
    location: "kirnahar",
    email: "dutswa2004@gmail.com",
    isloggedIn: "false",
    lastlogindays: ["monday","saturday"]
 };
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["name"])
// console.log(Jsuser[mysym]) 

Jsuser.email = "abbdwbdssbdw"
// Object.freeze(Jsuser)
// Jsuser.email = "sndkninkx "
console.log(Jsuser);

Jsuser.greeting1 = function(){
    console.log("hello js user");
}
Jsuser.greeting2 = function(){
        console.log(`hello js user,${this.name}`);
}
console.log(Jsuser.greeting1())
console.log(Jsuser.greeting2())
