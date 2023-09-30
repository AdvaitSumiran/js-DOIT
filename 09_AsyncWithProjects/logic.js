const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0;i<6;i++){
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
  };
  let stopIt
  const startChangingColor = function(){
    const changeByColor = function(){
      document.body.style.backgroundColor = randomColor()
    }
    stopIt = setInterval(changeByColor,500)
  }
  const stopChangingColor = function(){
    clearInterval(stopIt)
    
  }
  document.getElementById('start').addEventListener('click',startChangingColor);
  
  document.getElementById('stop').addEventListener('click',stopChangingColor);