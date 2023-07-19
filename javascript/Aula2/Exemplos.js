// let nomes =  ["Alana", "Aléxia", "Samanta", "Thiago", "Odirlei"]
//              0          1         2          3         4
// console.log(nomes[0])
// console.log(nomes[1])
// console.log(nomes[2])
// console.log(nomes[3])
// console.log(nomes[4])

//for (let contador = 0; contador < nomes.length; contador++) {
 //   const cadaElemento = nomes[contador];
//    console.log(cadaElemento);
    
//}

//nomes.forEach(cadaElemento =>{
//    console.log(cadaElemento);

//})

// nomes.forEach((cadaElemento, i) => {
//     console.log(i, cadaElemento);

// } )

//com i(indice)=posicao

// const frutas = ["Pera", "Uva", "Maçã", "Salada Mista"]

// for (let contador = 0; contador < frutas.length; contador++) {
//     const cadaElemento = frutas[contador];
//     console.log(contador, cadaElemento);
    
// }
// console.log(contador, cadaElemento);para colocar o numero na frente de cada fruta.

// frutas.forEach(cadaElemento => {
//     console.log(cadaElemento);
// })


// let salario = 1000;
// let contador = 0;

// while (salario < 5000) {
//     salario += 100; //ou salario= salario +100;
//     contador++;

//     console.log("O seu salario ainda é R$" + salario);
// }
// console.log(contador);

// do {
//     salario += 100;
//     contador++;
//     console.log("O seu salario ainda é R$" + salario);
// } while (salario < 5000);
// console.log(contador);

const prompt = require('prompt-sync')()

let numeroEscolhido = "5";
do {
  numeroEscolhido = prompt("Digite o numero: ") 

} while (numeroEscolhido != "5");

// while (numeroEscolhido != "5") {
//     numeroEscolhido = prompt("Digite o numero: ")
// }

let senha;
do {
    senha = prompt("Digite a senha: ")

    if (senha != "123") {

        console.log("senha incorreta");
    }    

} while (senha != "123");

console.log("senha correta");
