const botao = document.querySelector('button');
const texth2 = document.querySelector('h2');


botao.addEventListener('click', function(){
  if(texth2.style.visibility = 'hidden'){
    texth2.style.visibility == 'visible';
  } else {
    texth2.style.visibility = 'hidden';
  }
});