//Com o Private não podemos alterar os valores diretamente fora da classe, apenas dentro dela, e outra, só podemos mudar os valores fora da classe usando métodos

class Desktop{
    private id:number=0;
    public nome:string;
    private ram:number;
    private cpu:number;
    protected ligado:boolean 
    //O protected garante que o valor não poderá ser alterado nem por fora da classe nem com métodos da classe, apenas dentro da classe.

    constructor(nome:string, ram:number,cpu:number,ligado:boolean){
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }

    info():void{
        console.log(`Nome..: ${this.nome}`);
        console.log(`RAM...: ${this.ram} GB`);
        console.log(`CPU...: ${this.cpu} GHz`);
        console.log(`Ligado: ${this.ligado?"Sim":"Não"}`);
        console.log("-----------------------");
    }

    ligar():void{
        this.ligado = true;
    }

    desligar():void{
        this.ligado = false;
    }

    mudarRam(qtd:number):void{
        if(qtd >= 0 && qtd <= 1000){
            this.ram = qtd;
        }else {
            console.log(`Quantidade ${qtd} para o computador ${this.nome} não é permitido.`);
        }
    }

    melhorarCPU(cpu:number):void{
        this.cpu = cpu;
    }
}

const desk1 = new Desktop('MacBook Air M3 Pro', 12, 120, false);
// desk1.ligado = true;
desk1.nome = 'MacBook Air Boost';
desk1.mudarRam(256);
desk1.info();

const desk2 = new Desktop('Svelte Pro', 16, 140, false);
desk2.ligar();
desk2.info();