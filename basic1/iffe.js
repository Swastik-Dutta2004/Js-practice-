// Immediately Invoked Function Expressions 

(function chai (){
    console.log("DB connected");
    
} )();

((name) => {
    console.log(`DB connected two ${name}`);
    
})("sawstik")

