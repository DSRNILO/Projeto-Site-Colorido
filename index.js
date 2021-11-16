const listacores = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'gray','#FFDEAD', '#3fac14','#3e726b','#00FFFF' ]

var button = document.getElementById("botao")
var input = document.getElementById("input")
var span = document.getElementById("texto")

function numeroaleatorio(){
      return Math.floor(Math.random() * listacores.length)
}


function quandoclicar() {
      var cor 

      if(input.value){
            cor = input.value 
      } else {            
            var rand = numeroaleatorio()
            cor = listacores[rand]
      }
      
document.body.style.backgroundColor = cor 
span.textContent = cor


}



      button.addEventListener('click', quandoclicar )