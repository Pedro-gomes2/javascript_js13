const leia = require("readline-sync");

let backend = 0;
let frontendMulheres = 0;
let mobileHomens40 = 0;
let fullstackNB30 = 0;

let totalPessoas = 0;
let somaIdades = 0;

let continua = "S";

while (continua === "S") {

    let idade = leia.questionInt("Digite sua idade: ");

    console.log("==========================================");
    console.log("               GÊNERO                     ");
    console.log("==========================================");
    console.log("1 - Mulher Cis");
    console.log("2 - Homem Cis");
    console.log("3 - Não Binário");
    console.log("4 - Mulher Trans");
    console.log("5 - Homem Trans");
    console.log("6 - Outros");
    console.log("==========================================");

    let iden = leia.questionInt("Digite sua identidade de genero: ");

    console.log("==========================================");
    console.log("        Pessoa Desenvolvedora             ");
    console.log("==========================================");
    console.log("1 - Backend");
    console.log("2 - Frontend");
    console.log("3 - Mobile");
    console.log("4 - FullStack");

    let dev = leia.questionInt("Digite sua area: ");

    // Contador Backend
    if (dev === 1) {
        backend++;
    }

    // Mulheres Cis e Trans Frontend
    if ((iden === 1 || iden === 4) && dev === 2) {
        frontendMulheres++;
    }

    // Homens Cis e Trans Mobile maiores de 40
    if ((iden === 2 || iden === 5) && dev === 3 && idade > 40) {
        mobileHomens40++;
    }

    // Não Binários FullStack menores de 30
    if (iden === 3 && dev === 4 && idade < 30) {
        fullstackNB30++;
    }

    totalPessoas++;
    somaIdades += idade;

continua = leia.keyIn("Deseja continuar (S/N): ").toUpperCase();
}

console.log("\nRESULTADOS DA PESQUISA");
console.log("Total de pessoas desenvolvedoras Backend: " + backend);
console.log("Total de Mulheres Cis e Trans desenvolvedoras Frontend: " + frontendMulheres);
console.log("Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: " + mobileHomens40);
console.log("Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: " + fullstackNB30);
console.log("Total de pessoas que responderam a pesquisa: " + totalPessoas);
console.log("Media de idade: " + (somaIdades / totalPessoas).toFixed(2));
