botao = document.querySelector("button");
msg = document.querySelector("h2");

botao.addEventListener("click", function () {
  const date = new Date();
  msg.innerHTML = `Data: ${date};`;
});
