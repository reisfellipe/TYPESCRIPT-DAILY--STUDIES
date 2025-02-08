const numeros = [1,2,3,4,5,6,7,8,9,10];

const alfabeto = ["a",'b','c','d','e','f'];

const alfabetoComJoin = alfabeto.join(' --- ')

console.log(alfabetoComJoin);

const numerosComJoin = numeros.join()
console.log(numerosComJoin);

//O método join() unifica todos os elementos, e transforma em UM elemento do tipo:STRING
//Alem disso, se você colocar um valor entre as aspas, ele irá separar os elementos do array por esse valor
//ex: numeros.join(' - ') 
// 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10