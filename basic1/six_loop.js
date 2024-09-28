const coding = [1,2,3,4,5,6,7,8,9,10]

const mynum = coding.filter((item) => {return item > 4})
// console.log(mynum);

const newNums = []

coding.forEach((item)=>{
    if (item > 4){
        newNums.push(item)
    }
})

console.log(newNums);


