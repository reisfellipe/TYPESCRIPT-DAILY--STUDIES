let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor=10;
nvalor = <number>uvalor;
svalor = <string>uvalor;
svalor +=10;

console.log(`uvalor é ${typeof(uvalor)} e tem o valor ${uvalor}`);

console.log(`nvalor é ${typeof(nvalor)} e tem o valor ${nvalor}`);

console.log(`svalor é ${typeof(svalor)} e tem o valor ${svalor}`);

// Para converter efetivamente um tipo dentro do TS faça:

let valueToConvert:string = '10';
let convertedValue:number = Number.parseInt(valueToConvert);
console.log(convertedValue);
console.log(typeof(convertedValue));


let valueToConvert2:number = 10;
let convertedValue2:string = String(valueToConvert2);

console.log(convertedValue2, typeof(convertedValue2));
