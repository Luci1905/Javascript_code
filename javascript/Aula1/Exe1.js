let prompt = require('prompt-sync')()



//1.Faça um programa que receba o nome, cargo e salário de um uncionário.Se o funcionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário desse funcionário.

let nome = prompt('Digite o nome: ');
let cargo = prompt('Digite o cargo: ');
let salario = parseFloat(prompt('Digite o salário: '));

if (salario < 1000) {
    let dez_por_cento = 10 / 100
    let acrescimo_salario = salario * dez_por_cento
    let salario_atual = salario + acrescimo_salario
    console.log(nome, cargo, salario_atual);

}

else{
    console.log("seu salario é maior que 1000 náo tem acréscimo");
}