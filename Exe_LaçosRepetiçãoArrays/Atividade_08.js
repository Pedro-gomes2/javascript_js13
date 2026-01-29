const leia = require("readline-sync");

let vetor = [];
let soma = 0;
// Aqui cada i que ele vai , salva um numero
for (let i = 0; i < 10; i++) {
    vetor[i] = leia.questionInt(`Digite o ${i + 1}º numero: `);
}

console.log("\nElementos nos indices impares:");
for (let i = 0; i < vetor.length; i++) {
    if (i % 2 !== 0) {
        //VETOR "[]" VAI MOSTAR O INDICE
        console.log(vetor[i]);
    }
}

console.log("\nElementos pares:");
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        console.log(vetor[i]);
    }
}

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}

let media = soma / vetor.length;

console.log("\nSoma: " + soma);
console.log("Media: " + media.toFixed(2));
