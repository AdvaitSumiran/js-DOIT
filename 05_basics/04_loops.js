const coding = ["js","ruby","java","python"]

const values = coding.forEach((item) => {
    console.log(item)
})

// Filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=>num>4)

const newNums1 = myNums.filter((num)=>{
    return num > 4
})

console.log(newNums1)

// Filter returns a value instead of a foreach loop


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//

const newNums2 = myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(newNums2)

const nums = [1,2,3]

const myTotal = nums.reduce(function(acc,currval){
    return acc+currval
},0)

console.log(myTotal)

 