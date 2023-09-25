const arr = [1,2,3,4,5]

for (let i = 0;i <arr.length;i++) {
    const element = i;
    console.log(element);
    
}

for (let i = 0; i < arr.length; i++) {
    console.log(`Outer Loop value ${i}`)
    for (let j = 0; j < arr.length; j++) {
        console.log(`Inner loop value ${j}`)
    }
}

let myArr = ["dr st","batman","superman"]

for (let index = 0; index <= 20; index++) {
    if(index==5){
        console.log(`Detected 5`)
        break
    }
console.log(`value of i is ${index}`)
    
}

// After Break Nothing gets executed on s on

 