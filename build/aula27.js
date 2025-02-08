"use strict";
function f_teste(valor, r) {
    return r;
}
console.log(f_teste(10, "String aqui"));
console.log(f_teste("10", 10));
console.log(f_teste(true, { nome: "Fellipe", idade: 20 }));
class C_teste {
    constructor(valor) {
        this.valor = valor;
    }
}
const classeTeste1 = new C_teste(10);
console.log(classeTeste1);
const classeTeste2 = new C_teste("Agora só pode string");
console.log(classeTeste2);
