var cont = 0;

function contador() {
  cont += 1;
  document.getElementById('msg').innerHTML = `Botão clicado : ${cont} vezes`;
}
