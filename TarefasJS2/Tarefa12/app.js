const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const clicks = document.getElementById('clicks');
const cont = document.getElementById('cont');

var click = 0;
var contador = 0;

mais.addEventListener('click', function(){
  click++;
  contador++;
  escrever();
});

menos.addEventListener('click', function(){
  contador--;
  click++;
  escrever();
});

function escrever(){
  clicks.innerHTML = `Cliques: ${click}`;
  cont.innerHTML = `Contador: ${contador}`;
}