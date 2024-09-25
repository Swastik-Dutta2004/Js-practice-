for (let a = 0; a <= 10; a++) {
    const element = a;
     if(element==5){
        // console.log("5 is the best no.");
     }
        // console.log(element);
   
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop${i}`);
    
    for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value ${j} and inner loop ${i}`);   
    // console.log(i+ '*' +j+ '=' + i*j);
    
    }    
}

let myArray = ["ironman","captainamerica","spiderman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray;
    
// console.log(element);

}

for (let i = 1; i < 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        break
    }
    console.log(`value of i ${i}`);
}


for (let i = 1; i < 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue
    }
    console.log(`value of i ${i}`);
}
