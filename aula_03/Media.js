const leia = require("readline-sync");

let media =  leia.question("Digite a media do Aluno: ", {limitMenssage:'Digite um numero float'});

if(media >= 7 ){

    console.log("Aluno Aprovado");

}else if( media >= 5 && media <7){
    
    console.log("Aluno de Exame");

}else{
    
    console.log("Aluno Reprovado");

}




