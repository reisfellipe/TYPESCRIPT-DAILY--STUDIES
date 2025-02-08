"use strict";
function soma(n1 = 1, n2 = 2) {
    return n1 + n2;
}
function novoUser(user, pass, nome) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`nome: ${nome}`);
}
novoUser("Fellipe", "1234");
