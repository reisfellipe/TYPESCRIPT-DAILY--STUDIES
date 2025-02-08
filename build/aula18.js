"use strict";
class Desktop {
    constructor(nome, ram, cpu, ligado) {
        this.id = 0;
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`RAM...: ${this.ram} GB`);
        console.log(`CPU...: ${this.cpu} GHz`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-----------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    mudarRam(qtd) {
        if (qtd >= 0 && qtd <= 1000) {
            this.ram = qtd;
        }
        else {
            console.log(`Quantidade ${qtd} para o computador ${this.nome} não é permitido.`);
        }
    }
    melhorarCPU(cpu) {
        this.cpu = cpu;
    }
}
const desk1 = new Desktop('MacBook Air M3 Pro', 12, 120, false);
desk1.nome = 'MacBook Air Boost';
desk1.mudarRam(256);
desk1.info();
const desk2 = new Desktop('Svelte Pro', 16, 140, false);
desk2.ligar();
desk2.info();
