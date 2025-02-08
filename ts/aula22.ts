// //Public = Pode ser acessado de qualquer lugar
// //Private = Pode ser acessado apenas dentro da classe Pai
// //Protected = Pode ser acessado apenas dentro da classe Pai e suas subclasses


// class Conta {
//     protected numero:number;
//     protected titular:string;
//     private saldoConta:number
//     constructor(titular:string, saldo:number, ) {
//         this.numero = this.gerarNumeroConta();
//         this.titular = titular;
//         this.saldoConta = saldo;
//     }
//     private gerarNumeroConta():number{
//         return Math.floor(Math.random()*100000)+1
//     }
//     protected info(){
//         console.log(`Titular da conta: ${this.titular}`);
//         console.log(`Número da conta: ${this.numero}`);
//     }
//     public saldo():number{
//         return this.saldoConta;
//     }
//     public deposito(valor:number){
//         this.saldoConta+=valor
//     }
//     protected saque(valor:number){
        
//         if(valor < 0) return console.log("Valor de saque inválido");
        
//         if(valor <= this.saldoConta) {
//             this.saldoConta-=valor
//         }else {
//             console.log("Saldo insuficiente");
//         }
//     }
// }



// class ContaPF extends Conta {
//     cpf:number;
//     tipoDeConta:string;
//     constructor(cpf:number, titular:string, tipoDeConta:string, saldo:number){
//         super(titular, saldo)
//         this.tipoDeConta = tipoDeConta;
//         this.cpf = cpf;
//         this.info();
//     }

//     info(){
//         super.info();
//         console.log(`CPF do titular: ${this.cpf}`)
//         console.log(`Tipo de conta: ${this.tipoDeConta}`);
//         console.log("-------------------------------")
//     }

//     public deposito(valor:number){
//         if(valor < 0) return console.log(
//             "Valor invalido");
//         if(valor > 1000){
//             console.log(`O valor do depósito R$${valor},00 é muito alte para o tipo de conta ${this.tipoDeConta}`);
//         }else {
//             super.deposito(valor);
//         }
//     }

//     public saque(valor:number){
//         if(valor > 500){
//             console.log(`Valor de saque R$${valor},00 muito alto para o tipo de conta ${this.tipoDeConta}`);
//         }else{
//             super.saque(valor)
//         }
//     }
// }

// class ContaPJ extends Conta {
//     cnpj:number;
//     tipoDeConta:string;
//     constructor(cnpj:number, titular:string, tipoDeConta:string, saldo:number, ){
//         super(titular, saldo)
//         this.tipoDeConta = tipoDeConta;
//         this.cnpj = cnpj;
//         this.info();
//     }

//     info(){
//         super.info();
//         console.log(`CNPJ do titular: ${this.cnpj}`);
//         console.log(`Tipo de conta: ${this.tipoDeConta}`);
//         console.log("-------------------------------")
//     }

//     public deposito(valor: number){
//         if(valor >= 20000){
//             console.log(`O valor de depósito R$${valor},00 é muito alto para o tipo de conta ${this.tipoDeConta}`);
//         }else {
//             super.deposito(valor);
//         }
//     }
//     public saque(valor:number){
//         if(valor >= 10000){
//             console.log(`Valor de saque R$${valor},00 é muito alto para o tipo de conta ${this.tipoDeConta}`);
//         }else{
//             console.log(`Seu saque de R$${valor},00 foi realizado.`)
//             super.saque(valor);
//         }
//     }
// }

// const account1 = new ContaPF(313546848, "McDryan", "Pessoa física", 250);
// console.log(`Saldo da conta PF: ${account1.saldo()},00`);
// account1.deposito(400);
// console.log(`Saldo da conta PF atualizado: ${account1.saldo()},00`);
// account1.saque(249);
// console.log(`Saldo da conta PF atualizado: ${account1.saldo()},00`);
// account1.saque(2);

// // const account2 = new ContaPJ(423623456, "John", "Pessoa jurídica", 1450);
// // account1.info();