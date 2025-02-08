const nomes = ['Joel', "Marceline", "Julio", "Romario", "Celso", "Calvo"];

const descobrirSeInclui = nomes.includes("julio"); // "Julio" é diferente de "julio"
// console.log(descobrirSeInclui); 

const numeros = [1,2,3,4,5,67,78,98,34,345,4546,6546,75767,43242431];

console.log(numeros.includes(98));  

//O método includes() só vai verificar se o elemento que voce colocou nos parametros está INCLUSO no array
//Se tiver INCLUSO no array original ele retorna TRUE se não tiver FALSE.



