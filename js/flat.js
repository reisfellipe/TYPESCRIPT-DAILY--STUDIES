const nomes = ['Joel', ["Marceline"], "Julio", ["Marcelo", "Marilia"]];

const nomesNoMesmoPlano = nomes.flat();

console.log(nomesNoMesmoPlano);  // [Joel, Marceline, Julio, Marcelo, Marilia]


const numeros = [1,2,[3],4,5,[6,7,8],9];
const numerosNoMesmoPlano = numeros.flat();
console.log(numerosNoMesmoPlano);  // [1, 2, 3, 4, 5, 6, 7]

//o método Flat() deixa todos os arrays que estão dentro do array principal, no mesmo nível. Ou seja, ele desfaz a estrutura de array de array.