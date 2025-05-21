let pessoa = {
  nome: "Lorenzo Dias",
  idade: 19,
  documento: "1985789152", 
  mostraValores: function (){
    return `Nome: ${this.nome} Idade: ${this.idade} Documento: ${this.documento}`;
  }
};

console.log(pessoa.mostraValores());

