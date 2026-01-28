const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite o Numero A: ");
let n2 = leia.questionFloat("Digite o Numero B: ");
let n3 = leia.questionFloat("Digite o Numero C: ");

if( n1+n2 > n3 ){
    
    console.log(`A soma ${n1} + ${n2} é Maior do que ${n3}`);

}else if( n1+n2 < n3 ){

    console.log(`A soma ${n1} + ${n2} é Maior do que ${n3}`);

}else{

    console.log(`A soma ${n1} + ${n2} é igual do que ${n3}`);

}