function addToCart(card) {
  const message = card.querySelector(".added-message");
  message.textContent = "Adicionado ao carrinho!";
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}
