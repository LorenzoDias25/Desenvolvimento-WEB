const botao = document.querySelector("button");
const msg = document.querySelector("h2");

botao.addEventListener("click", function () {
  const pass = document.querySelector("input").value;
  console.log(pass.length);
  if (pass.length < 6) {
    msg.innerHTML = "Erro";
  } else {
    msg.innerHTML = "Senha ok";
  }
});
