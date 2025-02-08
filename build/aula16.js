"use strict";
class Computer {
    constructor(name, model, storage, patternSystem) {
        this.name = name;
        this.model = model;
        this.storage = storage;
        this.patternSystem = patternSystem;
    }
}
const comp1 = new Computer("Dell", 1, 256, "Windows");
console.log(comp1);
const comp2 = new Computer("HP", 2, 512, "Linux");
console.log(comp2);
