// const num = [1,2,3,4,5]

// const newnums = num.reduce(function(acc,currval){
// //    console.log(`acc is ${acc} and currval is ${currval}`);
//     return acc+currval},0)
// // console.log(newnums);

// newnums = num.reduce((acc,currval) => acc + currval,0)
// console.log(newnums);


const shoppingcard = [
    {
        coursename : "js",
        price: 2999
    },
    {
        coursename : "py",
        price: 5999
    },
    {
        coursename : "cpp",
        price: 1999
    },
    {
        coursename : "fullstack",
        price: 12999
    }
]

const paybill = shoppingcard.reduce((acc,item) =>item.price + acc,0 )
console.log(paybill);
