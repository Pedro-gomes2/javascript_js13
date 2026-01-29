const leia = require("readline-sync");

let continua = "S"

while(continua ==="S"){

    console.log("==========================================");
    console.log("      Calculadora com While               ");
    console.log("==========================================");
    console.log("(+)- SOMA"                                 );
    console.log("(-)- SUBTRAÇÃO"                            );
    console.log("(*)- MULTIPLCAÇÃO"                         );
    console.log("(/)- DIVISÃO"                              );
    console.log("==========================================");
    console.log("                                          ");

    let numero1 =  leia.questionFloat("Digite o Primeiro Numero: ", {limitMenssage:'Digite um numero float'});

    let numero2 =  leia.questionFloat("Digite o Segundo  Numero: ", {limitMenssage:'Digite um numero float'});

    let operacao =  leia.keyIn("Digite o Numero da  operacao: ");

    switch(operacao){
        case "+":
            console.log(`Resultado: ${numero1} + ${numero2} = ${numero1+numero2}`);
        break;
        case "-":
            console.log(`Resultado: ${numero1} - ${numero2} = ${numero1-numero2}`); 
        break;
        case "*":
            console.log(`Resultado: ${numero1} * ${numero2} = ${numero1*numero2}`);
        break;
        case "/":
            console.log(`Resultado: ${numero1} / ${numero2} = ${numero1/numero2}`);
        break;
        default:
            console.log("Operação Invalida");

    }

    continua = leia.keyIn("Deseja continuar (S/N").toLocaleUpperCase();


}