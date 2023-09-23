 function addTwoNumbers(number1,number2){
    let x = number1+number2
    console.log(x)
    return x
 }

let y = addTwoNumbers(3,6)+6
console.log(y)

 function loginUserMessage(username){
   if(username===undefined){
      console.log("Please enter a username")
      return
   }
   //return `${username} just logged in ` 
   return`Allow ${username} to access ${username}'s profile`
 }

 const str = loginUserMessage("ketan")
 console.log(str)

 let str1 = loginUserMessage("Ketan")
 console.log(str1)


// const course = {
//    name:"js in hindi",
//    add:"delhi",
//    phone:2457
// }

// const {name : name1} = course
// console.log(name1)

// const {phone} = course
// console.log(phone)

// Object Destructuring in JS


