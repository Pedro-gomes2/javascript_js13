"use strict"
const leia = require("readline-sync") 
let nome =leia.question("Digite o seu nome: ");
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = leia.questionFloat("Digite o seu salario: ");
let bonus = 0.05;
let mensagem= "recebe +1000";
let mensagem2= "recebe -1000"

console.log("O tipo da variavel nome é " , typeof(salarioBruto));

if(salarioBruto > 1000){
    console.log(mensagem);
}else {
    console.log(mensagem2);
}

console.log("Salário liquído; ", new Intl.NumberFormat('pt-BR', {style: 'currency',currency:'BRL'}).format(salarioBruto + (bonus *salarioBruto)))