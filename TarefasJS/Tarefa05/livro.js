export class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    dados() {
        return `O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}.`;
    }
} 