const nomes = [];
nomes.push("Jhulia"); //   0
nomes.push("Maria");//     1
nomes.push('Isabela'); //  2
nomes.push("João"); //     3
nomes.push('Vitor'); //    4
nomes.push('Pablo');  //   5
nomes.push("Donald"); //   6      
// console.log(nomes); // // [ 'Jhulia', 'Maria', 'Isabela', 'João', 'Vitor']

const mulheres = nomes.slice(0,3);
console.log(mulheres); // [ 'Jhulia', 'Maria', 'Isabela]

const homens = nomes.slice(3,7);
console.log(homens); // [ 'João', 'Vitor', 'Pablo' ]


//O slice vai pedir o indice inicial do corte do array, e o indice final do corte do array.
// exemplo, se eu quiser pegar os - 3 primeiros - elementos do array, eu vou usar o slice até o indice 3 = slice(0,3)