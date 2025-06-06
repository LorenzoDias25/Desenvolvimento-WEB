const botaoEnviar = document.getElementById('enviar');

botaoEnviar.addEventListener('click', function() {
  const nome = document.getElementById('formNome').value;
  const email = document.getElementById('formEmail').value;
  const msg = document.getElementById('formMsg').value;

  document.querySelector('div').style.visibility = 'visible';
  document.getElementById('nome').innerHTML = `Nome: ${nome}`;
  document.getElementById('email').innerHTML = `E-mail: ${email}`;
  document.getElementById('msg').innerHTML = `Mensagem: ${msg}`;
});