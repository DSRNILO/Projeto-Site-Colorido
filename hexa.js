var button = document.getElementById("botao")
var span = document.getElementById("texto")


function gerarcorhexadecimal(){ 
      return '#' + parseInt((Math.random() * 0xFFFFFF))
      .toString(16)
      .padStart(6, '0');
} 
function quandoclicar() {
     var cor =  gerarcorhexadecimal()

document.body.style.backgroundColor = cor 
span.textContent = cor

}
 button.addEventListener('click', quandoclicar )