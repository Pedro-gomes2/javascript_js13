const leia = require("readline-sync") 

let nota1 = leia.questionFloat("Digite sua 1 Nota: ");
let nota2 = leia.questionFloat("Digite sua 2 Nota: ");
let nota3 = leia.questionFloat("Digite sua 3 Nota: ");
let nota4 = leia.questionFloat("Digite sua 4 Nota: ");

let med;

med= (nota1+nota2+nota3+nota4)/4;
console.log(`Sua media é ${med.toFixed(1)}`);
