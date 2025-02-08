"use strict";
class Computador {
    constructor(nome, preco, memoria) {
        this.ligado = false;
        this.nome = nome;
        this.preco = preco;
        this.memoria = memoria;
    }
}
const primeiroPc = new Computador('Mac M1 Pro', 2899.99, 512);
console.log(primeiroPc.nome);
const segundoPc = new Computador("Aspire 3", 2399.99, 256);
console.log(segundoPc.nome);
const terceiroPc = new Computador("Lenovo Ideapad", 4599.99, 128);
console.log(terceiroPc.nome);
