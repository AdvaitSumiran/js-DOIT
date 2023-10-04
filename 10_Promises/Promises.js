const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task is Complete')
        resolve()
    },1000)
}) 

promiseOne.then(function(){
    console.log('Promise is consumed')
})
// CASE 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then (function(){
    console.log('Async 2 is resolved')
})
// CASE 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username :'Advait',email: 'advaitsumiran@gmail.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

// CASE 4   
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Advait",useremail :"Advait@gmail.com"})
        }else{
            reject('ERROR 404 NOT FOUND THE DATA AVAIALBLE IN THE DB PLS TRY AGAIN')
        }
    },1000)
})

promiseFour
.then(function(user){
console.log(user)
return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("It is either accepted or rejected here once and for all")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
   let error = true;
   if(!error){
    resolve({username:'Advait',pass:"123"})
   }else{
    reject('Error in js is there pls correct it')
   }
    },1000)
})

async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response)
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive()
fetch()
