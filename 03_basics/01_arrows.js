const user = {
    username:"Advait",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website we have created`)
    }
}

user.welcomeMessage()
user.username = "Ahem"
user.welcomeMessage()
const {username: name} = user
console.log(name)

console.log(this)

// function chai(){
//     let username1 = "Advait"
//     console.log(this.username1)
// }

// chai()


const chai = function(){
    let username = "Advait"
    console.log(this.username)
}


chai()


// Arrow Functions
const chai1 = () => {
    let username = "Advait"
    console.log(this.username)
}
chai1()

const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,6))

const addThree = (num1,num2,num3) => (num1+num2+num3)
console.log(addThree(3,4,7))
// Implicit return

 
