const leia = require("readline-sync");

let nome = leia.question("Digite Seu Nome: ");
let idade = leia.questionInt("Digite sua idade: ");
let doador = leia.question("Primeira Doação: true or falso: ");
let verificador;

if ( idade >= 18 && idade <= 60 ){
    verificador= "apto";
    
    
}else if(idade > 60 && idade <= 69 && doador !== "true"){ 

    verificador = "apto";

}else{

    verificador = "inapto";
}
console.log(`${nome} esta ${verificador} para doação de sangue!!`);