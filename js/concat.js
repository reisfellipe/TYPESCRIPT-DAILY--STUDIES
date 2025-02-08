//               0          1          2        3         4        5       6       7
const nomes = ['Joel', "Marceline", "Julio", "Pablo", "Justin", "Rhena", "Ken", "Bruno"];

const fatia1 = nomes.slice(0,4); // Pegando os 4 primeiros elementos da lista
// console.log(fatia1);

const fatia2 = nomes.slice(4) // Pegando os 4 últimos elementos da lista
// console.log(fatia2);

const fatia3 = [1,2,3,4,5,6];

const juncaoDasFatias = fatia1.concat(fatia2, fatia3);

console.log(juncaoDasFatias);

//o papel do concat() é juntar dois ou mais arrays, e formar um só.
