function CalculatePrice(num1,num2,...num3){
    return num3
}

console.log(CalculatePrice(200,400,500,2000,3500))

const user = {
    username:"Advait",
    price : 199
}

function handleObject(anyObject){
    console.log(`Usename is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

// ARRAYS IN FUNC

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))