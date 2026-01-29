const leia = require("readline-sync");

let matriz = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

// Leitura da matriz 3x3
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt(`Digite o valor da posicao [${i}][${j}]: `);
    }
}

// Diagonal Principal
console.log("\nElementos da Diagonal Principal:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
    somaPrincipal += matriz[i][i];
}

// Diagonal Secundária
console.log("\nElementos da Diagonal Secundaria:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][2 - i]);
    somaSecundaria += matriz[i][2 - i];
}

// Resultados
console.log("\nSoma dos Elementos da Diagonal Principal: " + somaPrincipal);
console.log("Soma dos Elementos da Diagonal Secundaria: " + somaSecundaria);
