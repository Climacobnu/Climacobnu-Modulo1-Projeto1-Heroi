var prompt = require('prompt-sync')();

console.log("historia do personagem")


var i = 0;
var a = prompt("Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?")
var b = a.toLowerCase()
var b = b.trim()
if (b === "sim"){
    i++;
} 
var a = prompt("Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?")
var b = a.toLowerCase()
var b = b.trim()
if (b === "sim"){
    i++;
} 
var a = prompt("Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?")
var b = a.toLowerCase()
var b = b.trim()
if (b === "sim"){
    i++;
} 
var a = prompt("Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?")
var b = a.toLowerCase()
var b = b.trim()
if (b === "sim"){
    i++;
} 
var a = prompt("Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?")
var b = a.toLowerCase()
var b = b.trim()
if (b === "sim"){
    i++;
}


if (i > 4){
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.")
}else if (i > 3){
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.")
}else if (i > 2){
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.")
}else if (i > 1){
    console.log("Você falha, mas ainda consegue fugir da situação") 
}else{
    console.log("Você falha miseravelmente.")
}
