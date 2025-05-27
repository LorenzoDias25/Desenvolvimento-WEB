var lista = [7.5, 8.0, 6.5, 9.0];
var soma = 0.0;
for (let index = 0; index < lista.length; index++) {
  soma += lista[index];
  
}

document.getElementById('resultado').innerHTML = `A média das notas é: ${soma/lista.length}`;