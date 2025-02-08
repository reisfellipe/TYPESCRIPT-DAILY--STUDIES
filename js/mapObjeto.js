const linguagens = [
    {linguagem: "Python", dificuldade: 'Fácil'},
    {linguagem: "Java", dificuldade: 'Difícil'},
    {linguagem: "JavaScript", dificuldade: 'Difícil'},
];

const nomesDeLinguagens = linguagens.map(obj => obj.linguagem )
console.log(nomesDeLinguagens); //somente os valores da propriedade linguagem:

const dificuldade = linguagens.map(obj => obj.dificuldade)
//aqui ele guarda somente os valores das propriedades dificuldade:

console.log(dificuldade);