// null- undefined - unknow

let vnome1:string|null;
vnome1 = null;
console.log(vnome1); //null


let vnome2:any;

console.log(vnome2);//undefined

let vnome3:unknown=10; // unknown só pode ser atribuido em tipos unknown ou any

console.log(vnome3); //10