const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero: ");
let paridade
let sinal
if( numero % 2 === 0){
    paridade = "Par";
}else{
    paridade = "Impar"
}
if( numero >=0  ){
    sinal = "Positivo";
}else{
    sinal = "Negativo"
}
console.log(`O Numero ${numero} é ${paridade} e ${sinal}`);