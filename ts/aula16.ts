//Uma classe é uma estrutura de dados que agrupa um conjunto de dados e métodos relacionados a esses dados.
class Computer {

    name:string;
    model:number;
    storage:number;
    patternSystem:string;

    //a função construtora é usada para criar objetos 
    constructor(name:string, model:number, storage:number, patternSystem:string) {
        this.name=name;
        this.model=model;
        this.storage=storage;
        this.patternSystem=patternSystem;
    }
}

const comp1 = new Computer("Dell", 1, 256, "Windows");
console.log(comp1);

const comp2 = new Computer("HP", 2, 512, "Linux");
console.log(comp2);