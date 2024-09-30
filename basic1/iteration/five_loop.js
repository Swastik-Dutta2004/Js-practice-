const coding =['java','cpp','python','ruby','js']
coding.forEach( function(val){
//     console.log(val);
    
})

coding.forEach((item) => {
//     console.log(item);
    
})

function printme (item){
    // console.log(item);
}
coding.forEach(printme)

coding.forEach( (item, index, arr) =>{
    // console.log(item,index,arr);
    
})

const MyCoding = [
    {   languagename: "JavaScript",
        languagefilename: "js"
    },
    {   languagename: "Java",
        languagefilename: "Java"
    },
    {   languagename: "Pyhton",
        languagefilename: "Py"
    },
]

MyCoding.forEach((item) => {
    console.log(item.languagename);
    
})
