"use strict";
class Conta {
    constructor(titular, saldo) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = saldo;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular da conta: ${this.titular}`);
        console.log(`Número da conta: ${this.numero}`);
    }
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoConta) {
        this.saldo = saldoConta;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0)
            return console.log("Valor de saque inválido");
        if (valor <= this.saldoConta) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}
class ContaPF extends Conta {
    constructor(cpf, titular, tipoDeConta, saldo) {
        super(titular, saldo);
        this.baseCalculo = 10;
        this.tipoDeConta = tipoDeConta;
        this.cpf = cpf;
        this.info();
    }
    CalcularTrib(valor) {
        return valor * this.baseCalculo;
    }
    info() {
        super.info();
        console.log(`CPF do titular: ${this.cpf}`);
        console.log(`Tipo de conta: ${this.tipoDeConta}`);
        console.log("-------------------------------");
    }
    deposito(valor) {
        if (valor < 0)
            return console.log("Valor invalido");
        if (valor > 1000) {
            console.log(`O valor do depósito R$${valor},00 é muito alte para o tipo de conta ${this.tipoDeConta}`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 500) {
            console.log(`Valor de saque R$${valor},00 muito alto para o tipo de conta ${this.tipoDeConta}`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    constructor(cnpj, titular, tipoDeConta, saldo) {
        super(titular, saldo);
        this.tipoDeConta = tipoDeConta;
        this.cnpj = cnpj;
        this.info();
    }
    info() {
        super.info();
        console.log(`CNPJ do titular: ${this.cnpj}`);
        console.log(`Tipo de conta: ${this.tipoDeConta}`);
        console.log("-------------------------------");
    }
    deposito(valor) {
        if (valor >= 20000) {
            console.log(`O valor de depósito R$${valor},00 é muito alto para o tipo de conta ${this.tipoDeConta}`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor >= 10000) {
            console.log(`Valor de saque R$${valor},00 é muito alto para o tipo de conta ${this.tipoDeConta}`);
        }
        else {
            console.log(`Seu saque de R$${valor},00 foi realizado.`);
            super.saque(valor);
        }
    }
}
const account1 = new ContaPF(313546848, "McDryan", "Pessoa física", 250);
console.log(`Saldo da conta PF: ${account1.saldo},00`);
account1.deposito(400);
account1.info();
