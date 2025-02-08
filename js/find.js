//métodos Find() e FindIndex()

const nomes = ['Joel', "Marceline", "Julio", "Romario", "Celso", "Calvo","Rodrigo"];

const resultado = nomes.find(nome => nome.endsWith("o"))

console.log(resultado);

const numeros = [33, 17, 39, 15, 45, 20, 25, 30];

const primeiroNumeroMaiorQue = numeros.find(n => n < 15);
// console.log(primeiroNumeroMaiorQue);

const posicaoNumeroMaiorQue = numeros.findIndex(n => n > 40); 
console.log(posicaoNumeroMaiorQue);

//findIndex() devolve a posição do elemento encontrado, ou -1 caso não encontre nada
// find() retorna o valor em si se tiver, se não existir um vlaor que atenda ele retorna UNDEFINED.