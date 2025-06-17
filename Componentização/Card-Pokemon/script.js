const pokemons = [
  {
    nome: "Pikachu",
    tipo: "Elétrico",
    habilidade: "Choque do Trovão",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    nome: "Charmander",
    tipo: "Fogo",
    habilidade: "Chama",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    nome: "Squirtle",
    tipo: "Água",
    habilidade: "Torrente",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    nome: "Bulbasaur",
    tipo: "Planta/Veneno",
    habilidade: "Crescimento",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  }
];

const container = document.getElementById("card-container");

pokemons.forEach((poke) => {
  const col = document.createElement("div");
  col.className = "col-md-3 mb-4";

  const card = document.createElement("div");
  card.className = "card h-100 text-center p-2";

  card.innerHTML = `
    <img src="${poke.imagem}" class="card-img-top" alt="${poke.nome}" />
    <div class="card-body">
      <h5 class="card-title">${poke.nome}</h5>
      <p class="card-text"><strong>Tipo:</strong> ${poke.tipo}</p>
      <p class="card-text"><strong>Habilidade:</strong> ${poke.habilidade}</p>
    </div>
  `;

  // Evento: ao clicar, ativa classe que muda estilo
  card.addEventListener("click", () => {
    card.classList.toggle("clicked");
  });

  col.appendChild(card);
  container.appendChild(col);
});
