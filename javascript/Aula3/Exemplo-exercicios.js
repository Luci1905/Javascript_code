import PromptSync from "prompt-sync";

import { verificarMaiorIdade } from "./exercicio";

const prompt = PromptSync();

//menu para escolher qual exercicio o usuário escolher.

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite um numero que respresente um exercicio de 1 a 4: "));
    //switch é um comparador do valor atribuido do valor case.
    switch (exercicio) {
        case 1:
            //chamando função helloWorld()
            helloWorld("Hello World!!!");
            break;
        case 2:
            //objeto
            let aluno = {
                nome: "Rebeca",
                idade: 19,
                hardSkills: ["Figma", "HTML", "CSS", "Web Responsive"]
            }
            //acessando objeto pela propriedade
            console.log(aluno.nome, aluno.idade, aluno.hardSkills);
            //exibindo objeto inteiro
            console.log("",aluno);
        default:
            break;
    }
    continuar = prompt("Deseja continuar ver outros exercicios? Digite s para sim e digite n para não: ").toLocaleLowerCase();
    //toLocaleLowerCase transforma o texto em letra minuscula.
} while (continuar === "s");


function helloWorld(frase) {
    console.log(frase);
}