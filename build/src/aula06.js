"use strict";
let dados = {
    nome: "João",
    idade: 30,
    status: "Online",
    talk: (p) => { console.log(p); }
};
console.log(dados);
console.log(typeof (dados));
dados.talk("Oi, essa função vem de um obj");
