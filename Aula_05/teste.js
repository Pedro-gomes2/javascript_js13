let matriz = [
    [1, 2,3],
    [4, 5,6],
    [7, 8,9]
]

let diagonalP = "", diagonalS = "" ;
let somaDiagonalP = 0, somaDiagonalS = 0;

// Diagonal Principal

for (let indice = 0; indice<matriz.length; indice ++){

    diagonalP += matriz[indice][indice]+"";
    somaDiagonalP +=  matriz[indice][indice];
}

// diagonal secundaria

for (let indice = 0; indice<matriz.length; indice ++){

    diagonalS += matriz[indice][matriz.length - 1 - indice]+"";
    somaDiagonalS +=  matriz[indice][matriz.length - 1 - indice];
}


console.log(`A diagonal Principal é: ${diagonalP}`);
console.log(`A Soma da diagonal Principal é: ${somaDiagonalP}`);

console.log(`A diagonal Principal é: ${diagonalS}`);
console.log(`A Soma da diagonal Principal é: ${somaDiagonalS}`);