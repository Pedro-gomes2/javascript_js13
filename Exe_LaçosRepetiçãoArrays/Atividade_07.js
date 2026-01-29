const leia = require("readline-sync");

// Vetor fixo conforme o exemplo
let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o numero que voce deseja: ");

let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        console.log("O numero " + numero + " esta na posicao: " + i);
        encontrado = true;
        break;
    }
}

if (encontrado=== false) {
    console.log("O numero " + numero + " nao foi encontrado!");
}
