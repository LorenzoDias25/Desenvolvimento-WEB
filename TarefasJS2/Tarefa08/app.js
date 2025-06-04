var text = "";
var cor = "";

document.querySelector('input').addEventListener('input', function(){
  text = document.querySelector('input').value;
  document.querySelector('h2').innerHTML = `Nome digitado: ${text} Cor escolhida: ${cor}`;
});

document.querySelector('select').addEventListener('change',function() {
  cor = document.querySelector('select').value;
  document.querySelector('h2').innerHTML = `Nome digitado: ${text} Cor escolhida: ${cor}`;
});

