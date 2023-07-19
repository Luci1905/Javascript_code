/*9. Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0*/

const prompt = require('prompt-sync')()

let numero= parseInt(prompt('Digite um numero do usuário: '))

while (numero >= 0) {
    console.log(numero--);
    
}