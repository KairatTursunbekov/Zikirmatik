let a = 0;
let but = document.getElementById('button')


let count = ()=>{
     a++;
     but.innerHTML = a
     if(a==20){
                
      document.getElementById('one').style.display = 'block'
      document.getElementById('one').style.color = 'green'
      } 
      if(a==40){
         // count=0
         document.getElementById('two').style.display = 'block'
         document.getElementById('two').style.color = 'green'
      } 
      if(a==60){
         // count=0
         document.getElementById('three').style.display = 'block'
         document.getElementById('three').style.color = 'green'
      } 
      if(a==80){
         // count=0
         document.getElementById('four').style.display = 'block'
         document.getElementById('four').style.color = 'green'
      } 
      if(a==100){
         // count=0
         
         alert('Машааллах Аллах сизден ыраазы болсун')
         alert('Эки дуйно бактылуу болунуз 🤲')
      } 
}