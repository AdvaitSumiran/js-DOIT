// This code is all about a Code of digital time clock it is very basic and yet quite convincing

// JS CODE:

const clock = document.querySelector('#clock')

let date = new Date()
console.log(date.toLocaleTimeString())


setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString())
 clock.innerHTML = date.toLocaleTimeString();
},1000);


