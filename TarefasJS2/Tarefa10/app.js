const botao = document.querySelector('button');
const imagem = document.querySelector('img');


botao.addEventListener('click', function(){
  if(imagem.style.visibility == 'hidden'){
    imagem.style.visibility = 'visible';
  } else {
    imagem.style.visibility = 'hidden';
  }
});