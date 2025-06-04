function button() {
  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  var cor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.querySelector("div").style.backgroundColor = cor;
  console.log("Cor mudada");
}
