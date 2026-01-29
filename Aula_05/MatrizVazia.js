const leia = require("readline-sync");
//let matriz =   new Array(2);

//adicionando as linhas da matriz(coluna)
//for (let indice =0; indice<matriz.length; indice++){
//    matriz[indice] = Array(3);
//}

//entrada de dados da matriz via teclado

//for( let linha = 0; linha< matriz.length;linha++){
//    for (let coluna = 0; coluna<matriz[linha].length; coluna++){
//        matriz[linha][coluna] = leia.questionInt(`matriz [${linha}][${coluna}]= `);
//    }
//}

//exibir os dados 
//console.table(matriz);

let matriz = Array.from({ length: 2 }, () =>    Array.from({ length: 3 }, () => leia.questionInt("Digite um numero: ")) );
console.table(matriz);