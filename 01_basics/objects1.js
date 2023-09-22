// In case of literals Singleton is not used but in the case of const it is being used

// object literals

const mysym = Symbol("key1")

const jsuser = {
    name:"Advait",
    age : 21,
    [mysym]: "mykey1",
    location: "Kochi",
    email: "advaitsumiran@gmail.com",
    isLoggedIn: false,
}

console.log(jsuser.name)
console.log(jsuser["name"])
console.log(jsuser["age"])
console.log(jsuser["isLoggedIn"])
console.log(jsuser.email)
console.log(jsuser[mysym])


jsuser.email = "advaitthemammaboy@google"
//Object.freeze(jsuser)
jsuser.email = "noreply@huhihi"
console.log(jsuser.email)

jsuser.greetings = function(){
    console.log("Hello user")
}

console.log(jsuser.greetings())

jsuser.greetingsTwo = function(){
    console.log(`Hello user developer's name is ${this.name}`)
} 

console.log(jsuser.greetingsTwo())