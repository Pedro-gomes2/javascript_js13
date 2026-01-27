"use strict"
const leia = require("readline-sync") 
// Criando as variaveis //

let salarioBruto = leia.questionFloat("Digite seu Salário: ");
let AdicionalNoturno = leia.questionFloat("Digite o Adicional Noturno:");
let HorasExtras = leia.questionFloat("Digite as Horas Extras: ");
let Descontos = leia.questionFloat("Entre com os Descontos: ");
let SalarioLiquido;

// Criando a logica //

SalarioLiquido = salarioBruto  + AdicionalNoturno + (HorasExtras*5) - Descontos;

console.log(`Seu Salário Liquido é`, new Intl.NumberFormat('pt-BR', {style: 'currency',currency:'BRL'}).format(SalarioLiquido) );

