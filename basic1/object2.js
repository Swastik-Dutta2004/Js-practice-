const tinderuser ={}

tinderuser.id = "bxjbsm"
tinderuser.name = "swastik"
tinderuser.isLogged = false

// console.log(tinderuser)

const regularUser = {
    email : "bskwbjaddEventListener",
    fullname : {
        userfullname : {
            firstname : "swastik",
            lastname : "dutta"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

// const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// // const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}
// // console.log(obj3);
 
// const user = [
//     {
//         id:1,
//         email:"nxsnxknkm"
//     },
//     {
//         id:1,
//         email:"nxsnxknkm"
//     },{
//         id:1,
//         email:"nxsnxknkm"
//     },
// ]
user[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'))

console.log(tinderuser.hasOwnProperty('isLogged'));

