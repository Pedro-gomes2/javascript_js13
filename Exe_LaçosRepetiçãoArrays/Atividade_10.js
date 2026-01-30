const leia = require("readline-sync");

let notas = [];
let medias = [];

// Leitura das notas
for (let i = 0; i < 10; i++) {
    notas[i] = [];
    let soma = 0;

    console.log(`\nDigite as notas do participante ${i + 1}:`);

    for (let j = 0; j < 4; j++) {
        notas[i][j] = leia.questionFloat(`Nota do ${j + 1}º bimestre: `);
        soma += notas[i][j];
    }

    medias[i] = soma / 4;
}

// Exibindo as médias
console.log("\nMedias dos participantes:");
for (let i = 0; i < medias.length; i++) {
    console.log(`Participante ${i + 1}: ${medias[i].toFixed(1)}`);
}

