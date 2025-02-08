//Como criar funções em TS
//precisamos especificar o tipo dos parametros e do retorno da função

function logar(user:string , password:string):void{
    console.log(`User: ${user} - Password: ${password}`);
}

// logar('Fellipe', 212);

function soma2(n1:number, n2:number):number {
    return n1 + n2;
}

let n_res:number = soma2(10,20);
let s_res:string = soma2(20,21).toString();

console.log(s_res);