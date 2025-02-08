// //O que é herança?

// class Conta {
//     public numero:number;
//     public titular:string;
//     constructor(titular:string){
//         this.numero = this.gerarNumeroConta();
//         this.titular = titular;
//     }
//     gerarNumeroConta():number{
//         return Math.floor(Math.random()*100000)+1
//     }
// }

// class ContaPF extends Conta {
//     cpf:number;
//     constructor(cpf:number, titular:string){
//         super(titular)
//         this.cpf = cpf;
//     }
// }

// class ContaPJ extends Conta {
//     cnpj:number;
//     constructor(cnpj:number, titular:string){
//         super(titular)
//         this.cnpj = cnpj;
//     }
// }

// const account2 = new ContaPJ(423623456, "John");
// const account1 = new ContaPF(313546848, "McDryan");

// console.log(account1.numero);
// console.log(account1.titular);
