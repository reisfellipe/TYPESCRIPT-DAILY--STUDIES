// //arrow functions -função anonima de callback


// const teste = (txt:string="...", txt2?:string):void => {
//     console.log(txt,txt2);
// }

// // teste('Curso de Typescript');
// // teste();
// // teste('Curso de Typescript','Typescript é muito legal');

// const sum = (n1: number, n2:number):number => {
//     return n1 + n2;
// };

// // console.log(sum(10, 20));


// //mas e se o parametro N for uma array? ou melhor, e se eu quiser que ele simplismente some todos os valores que eu colocar dentro passando como parâmetro?

// const sum2 = (n:number[]):number{
//     let s:number = 0;
//     n.forEach((e)=>{
//         s += e;
//     })
//     return s;
// }


// let numer:number[] = [2,5,10,10,50];

// console.log(sum2(numer));

// const sum3 = (n:number[]):number {
//     let res:number = 0;
//     n.forEach((e)=>{
//         res += e;
//     })
//     return res;
// }

// let numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

// console.log(sum3(numbers));