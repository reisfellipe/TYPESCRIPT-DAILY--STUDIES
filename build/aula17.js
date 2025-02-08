"use strict";
class Pessoa {
    constructor(name, age, eyeColor, occupation, phoneNumber, isSleeping) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
        this.occupation = occupation;
        this.phoneNumber = phoneNumber;
        this.isSleeping = isSleeping;
    }
    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Eye Color: ${this.eyeColor}`);
        console.log(`Occupation: ${this.occupation}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
        console.log(`Is Sleeping: ${this.isSleeping}`);
    }
    toSleep() {
        this.isSleeping = true;
    }
}
const pessoa1 = new Pessoa("Fellipe", 20, "Brown", "Programmer", 11965453461, false);
pessoa1.info();
pessoa1.toSleep();
pessoa1.info();
