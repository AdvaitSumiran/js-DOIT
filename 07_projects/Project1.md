'''
only js code for a Theme Changer Code is given below

PROJECT 1: COLOUR CHANGER USING HTML , CSS AND JS

'''

//  JS CODE
const buttons = document.querySelectorAll('.button')
const body  = document.querySelector("body")


buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
   console.log(e)
   console.log(e.target)
   if(e.target.id === 'grey'){
     body.style.backgroundColor = e.target.id;
   }

   if(e.target.id === 'white'){
     body.style.backgroundColor = e.target.id;
   }

   if(e.target.id === 'blue'){
     body.style.backgroundColor = e.target.id
   }
   if(e.target.id === 'yellow'){
     body.style.backgroundColor = e.target.id
   }
  })      

});