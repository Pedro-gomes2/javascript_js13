const leia = require("readline-sync");

console.log("==========================================");
console.log("            CONTA BANCARIA                ");
console.log("==========================================");
console.log("1 - SALDO"                                 );
console.log("2 - SAQUE"                                 );
console.log("3 - DEPOSITO"                              );
console.log("==========================================");

let saldo = 1000;
let operacao;

let codigo = leia.questionInt("Digite a Operacao desejada: ");

switch (codigo) {
    case 1:
        operacao = "Saldo";
        break;
    case 2:
        operacao = "Saque";
        let ValorSaque = leia.questionFloat("Digite o valor do Saque: ");
        if (ValorSaque > saldo) {
            console.log("Saldo insuficiente!");            
        } else {
            saldo = saldo - ValorSaque;
        }
        break;
    case 3:
        operacao = "Deposito";
        let ValorDeposito = leia.questionFloat("Digite o Valor de Deposito: ");
        saldo = saldo + ValorDeposito;
        break;
    default:
        operacao = "Operação Invalida";
        break;
}

console.log(`Operação: ${operacao}`);
console.log(`Saldo: R$ ${saldo.toFixed(2)}`);


