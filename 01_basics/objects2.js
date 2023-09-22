const tinderUser ={}

tinderUser.id = "23abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "hui@GGG",
    userfullname:{
        firstname:"Advait",
        lastname :"Sumiran"
    }
}

console.log(regularUser.userfullname.firstname)
console.log(regularUser.userfullname.lastname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj6 = {8:"a",9:"b"}

const obj3 = {...obj1,...obj2,...obj6}

const obj4 = Object.assign({},obj1,obj2)

console.log(obj3)
console.log(obj4)


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

 //<>*************DESTRUCTURING OF OBJECTS AND INTRO TO API**************************************<>

 