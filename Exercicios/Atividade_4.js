"use strict"
const leia = require("readline-sync") 
// Criando as variaveis //

let n1 = leia.questionFloat("Digite o 1 numero: ");
let n2 = leia.questionFloat("Digite o 2 numero: ");
let n3 = leia.questionFloat("Digite o 3 numero: ");
let n4 = leia.questionFloat("Digite o 4 numero: ");
let Diferenca;

// Criando a logica//

Diferenca = (n1*n2)-(n3*n4)
console.log(`A Diferenca é ${Diferenca.toFixed(1)}`);
