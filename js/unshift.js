
//               0          1          2
const nomes = ['Joel', "Marceline", "Julio"];
console.log(nomes);

nomes.unshift("Maze");
console.log(nomes); // [ 'Maze', 'Joel', 'Marceline', 'Julio' ]
//                         0        1         2          3

//o Unshift() adiciona elementos no início do array e altera os indices dos elementos existentes.