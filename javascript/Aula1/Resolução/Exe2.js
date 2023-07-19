// 2. Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.

let prompt = require('prompt-sync')()

let salario = parseInt(prompt('Digite o salário: '));

if (salario < 500) {
    let trinta_por_cento = 30/100
    let acrescimo_salario = salario * trinta_por_cento
    let salario_atual = salario = acrescimo_salario
    console.log(salario_atual);
    
}