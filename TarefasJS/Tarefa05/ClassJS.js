import { Livro } from './livro.js';

const livro1 = new Livro("Sherlock", "Holmes", 2005);
console.log(livro1.dados());
document.getElementById("resultado1").textContent = livro1.dados();

const livro2 = new Livro("Harry", "Potter", 2009);
document.getElementById("resultado2").textContent = livro2.dados();