const leia = require("readline-sync");

let numeros = [ 10, 25, 5, 45, 85];

let cores = Array(5);

for(let indice = 0; indice < 5; indice ++ ){
    console.log(`numeros [${indice}] = ${numeros[indice]}`);
}

console.log(`O tamanho do vetor numero é : ${numeros.length}`);
console.table(numeros);


//==================================================
for(let indice = 0; indice < cores.length; indice ++ ){
   cores[indice] = leia.question("digite o nome de uma cor ");
}

console.table(cores);

console.table(numeros.sort((a,b)=> a-b ));