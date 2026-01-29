const leia = require("readline-sync");

let menores = 0;
let maiores = 0;

let idade = leia.questionInt("Digite uma idade: ");

while (idade >= 0) {

    if (idade < 21) {
        menores++;
    }

    if (idade > 50) {
        maiores++;
    }

    idade = leia.questionInt("Digite uma idade: ");
}

console.log(`Total de pessoas menores de 21 anos: ${menores}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores}`);
