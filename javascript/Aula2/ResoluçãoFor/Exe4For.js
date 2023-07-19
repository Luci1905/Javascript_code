//4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10;

const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite o numero que deseja ver a tabuada: "))

for (let contador = 1; contador <= 10; contador++) {
   console.log(`${numero} x ${contador} = ${numero * contador}`);
    
}
    
