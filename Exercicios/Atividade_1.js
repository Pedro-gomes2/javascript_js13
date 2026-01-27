const leia = require("readline-sync") 

let salario = leia.questionFloat("Digite o Salario: ");
let abono = leia.questionFloat("Digite o Abono: ");

let NovoSalario = salario + abono;

console.log(`Seu Novo Salário:`,  new Intl.NumberFormat('pt-BR', {style: 'currency',currency:'BRL'}).format(NovoSalario));

