//mencione três exemplos de uso do método de array filter?

//                                                                  !==   ===    if ()      * + -
//o Filter serve quando precisamos filtrar um valor a partir de uma validação/verificaçõa/operação
const numeros = [1,2,3,4,5,6,7,8,9,10, 20, 30, 40, 49, 50, 60, 63, 66, 69, 70, 80, 90, 100];

const entre60e70 = numeros.filter(n => n > 60 && n < 70);
console.log(entre60e70); //63, 66, 69


const numerosPares = numeros.filter(numero => numero % 2 === 0); 
// console.log(numerosPares);

const numerosImpares = numeros.filter(impar => impar % 2 !== 0) // [1, 3, 5, 7, 9]
// console.log(numerosImpares);

const numerosMenoresQue50 = numeros.filter(numMenorQue50 => numMenorQue50 <= 50);
// console.log(numerosMenoresQue50);

const numerosMaioresQue50 = numeros.filter(numerosMaioresQue50 => numerosMaioresQue50 > 50);
// console.log(numerosMaioresQue50);

const nomes = ['Javascript', 'HTML', 'CSS', 'REACT', 'BOOTSTRAP', 'TAIWIND', 'JEST'];

//                                                                   TRUE
const elementoReact = nomes.filter(elementoDeNomes => elementoDeNomes === 'REACT');
// console.log(elementoReact);

const elementoJS = nomes.filter(e => e === 'Javascript' || e === 'JAVASCRIPT' || e === 'javascript');
// console.log(elementoJS); // Javascript



const numeros2 = [1,2,3,4,5];

const numerosMultiplosDe2 = numeros.filter(num => num === 2)

console.log(numerosMultiplosDe2);

//Filter diferente do map, ele não transforma dados, ele apenas valida algum critério que nós passamos, ex: se o elemento x === 'x' 

//se retornar TRUE ele guarda o elemento orginal num array diferente , se retornar FALSE ele ignora o elemento orginal e continua para o próximo elemento.