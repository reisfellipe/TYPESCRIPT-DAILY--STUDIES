//Entendendo GENERICS
// é como um componente que pode funcionar com vários tipos, veja;
// Exemplo: Array, Map, Set, etc.

function f_teste<T,S>(valor:T, r:S):S{
    return r;
}

console.log(f_teste<number, string>(10, "String aqui"));

console.log(f_teste<string, number>("10", 10));

console.log(f_teste<boolean, object>(true, {nome:"Fellipe", idade:20}));

//exemplo usando GENERICS em uma Classe

class C_teste<T>{
    public valor:T;
    constructor(valor:T){
        this.valor = valor;
    }
}

const classeTeste1 = new C_teste<number>(10);
console.log(classeTeste1);

const classeTeste2 = new C_teste<string>("Agora só pode string");
console.log(classeTeste2);