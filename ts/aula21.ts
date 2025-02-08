// //O que é herança?
// //como usar o metodo de loop for?

// //Public = Pode ser acessado de qualquer lugar
// //Private = Pode ser acessado apenas dentro da classe Pai
// //Protected = Pode ser acessado apenas dentro da classe Pai e suas subclasses

// class Conta {
//     protected numero:number;
//     protected titular:string;
//     protected tipoDeConta:string;
//     constructor(titular:string, tipoDeConta:string){
//         this.numero = this.gerarNumeroConta();
//         this.titular = titular;
//         this.tipoDeConta = tipoDeConta;
//     }
//     private gerarNumeroConta():number{
//         return Math.floor(Math.random()*100000)+1
//     }
//     protected info(){
//         console.log(`Titular: ${this.titular}`);
//         console.log(`Número da conta: ${this.numero}`);
//         console.log(`Tipo de conta: ${this.tipoDeConta}`);
//         console.log("-------------------------------")
//     }
// }

// class ContaPF extends Conta {
//     cpf:number;
//     constructor(cpf:number, titular:string, tipoDeConta:string){
//         super(titular, tipoDeConta)
//         this.tipoDeConta = 'PF';
//         this.cpf = cpf;
//         this.info();
//     }
// }


// class ContaPJ extends Conta {
//     cnpj:number;
//     constructor(cnpj:number, titular:string, tipoDeConta:string){
//         super(titular, tipoDeConta)
//         this.tipoDeConta = 'PJ';
//         this.cnpj = cnpj;
//         this.info();
//     }
// }

// const account1 = new ContaPF(313546848, "McDryan", "Pessoa física");
// const account2 = new ContaPJ(423623456, "John", "Pessoa jurídisa");

// // account1.info();