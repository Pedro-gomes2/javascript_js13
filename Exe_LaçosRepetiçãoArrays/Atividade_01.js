const leia = require("readline-sync");

let num1 = leia.questionInt("Digite o Primeiro Numero: ");

let num2 = leia.questionInt("Digite o Segundo Numero: ");

if( num1 < num2 ){
    for(let i = num1; i<=num2 ;i++ ){
        if( i%3==0 && i%5 ==0 ){
            console.log(`${i} é multiplo de 3 e 5 `);
        }
        
    }
}else{
    console.log("Intervalo Invalido!");
    
}



