const leia = require("readline-sync");
console.log("==========================================");
console.log("          Codigo do Produto               ");
console.log("==========================================");
console.log("1 - Cachorro Quente"                       );
console.log("2 - X-Salada"                              );
console.log("3 - X- Bacon"                              );
console.log("4 - Bauru"                                 );
console.log("5 - Refrigerante"                          );
console.log("6 - Suco de Laranja"                       );

console.log("========================================");
console.log("                                        ");

let codigo = leia.questionInt("Digite o Codigo: ");
let quant =  leia.questionInt("Digite a Quantidade: ");  

switch(codigo){
    case 1:
        ValorTotal= quant * 10;
        console.log(`Cachorro Quente : ${ValorTotal}`)
    break;
    case 2:
        ValorTotal= quant * 15;
        console.log(`X-Salada :  ${ValorTotal}`)
    break;
    case 3:
        ValorTotal= quant * 18;
        console.log(`X- Bacon :  ${ValorTotal}`)
    break;
    case 4:
        ValorTotal= quant * 12;
        console.log(`Bauru :  ${ValorTotal}`)
    break;
    case 5:
        ValorTotal= quant * 8;
        console.log(` Refrigerante : ${ValorTotal}`)
    break;
    case 6:
        ValorTotal= quant * 13;
        console.log(` Suco de Laranja : ${ValorTotal}`)
    break;
    default:
        console.log("Operação Invalida");
}