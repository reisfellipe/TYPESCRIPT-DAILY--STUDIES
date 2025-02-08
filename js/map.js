//Os métodos maps serve para mapear um elemento específico dentro de uma lista

//como usar o map()?
//o map() retorna um novo array (transformado)

//exercicio para praticar: criar uma lista de 5 elementos e usar o método map para criar uma lista com o dobro

//               2, 4, 6, 8, 10
const numbers = [1, 2, 3, 4, 5];

const numerosMultiplicadosPor2 = numbers.map((num) => num * 2);

console.log(numerosMultiplicadosPor2);

//Map() diferente do filter ele não valida nada, ele transforma o dado de acordo com alguma alteração definida dentro do escopo de função

/*
ex: queremos fazer com que o numero 2 dentro da llista seja transformado em 20, então faremos uma função que multiplique o numero por 10 desse jeito: num => num * 10

independente do resultado transformado ele irá guardar no array novo
*/