const leia = require("readline-sync");

let d1 = leia.question("Digite (Vertebrado/Invertebrado): ");
let tipo = leia.question("Digite o tipo: ");
let fome = leia.question("Digite como se alimenta: ");

if (d1 === "vertebrado" && tipo === "ave" && fome === "carnivoro") {
    console.log("Águia");
} else if (d1 === "vertebrado" && tipo === "ave" && fome === "onivoro") {
    console.log("Pomba");
} else if (d1 === "vertebrado" && tipo === "mamifero" && fome === "onivoro") {
    console.log("Homem");
} else if (d1 === "vertebrado" && tipo === "mamifero" && fome === "herbivoro") {
    console.log("Vaca");
} else if (d1 === "invertebrado" && tipo === "inseto" && fome === "hematofago") {
    console.log("Pulga");
} else if (d1 === "invertebrado" && tipo === "inseto" && fome === "herbivoro") {
    console.log("Lagarta");
} else if (d1 === "invertebrado" && tipo === "anelideo" && fome === "hematofago") {
    console.log("Sanguessuga");
} else if (d1 === "invertebrado" && tipo === "anelideo" && fome === "onivoro") {
    console.log("Minhoca");
} else {
    console.log("Animal não encontrado!");
}
