// Mais recursos de funções do Typescript

function soma(n1:number=1, n2:number=2):number {
    return n1 + n2;
}

// console.log(soma());

function novoUser(user:string, pass:string, nome?:string):void{
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`nome: ${nome}`);
}

novoUser("Fellipe", "1234");