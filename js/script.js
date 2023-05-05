// var nome = "Luizinho";

// if(nome != ""){
//     let nome = "Nicolly";
// }

// console.log(nome);
//Quando declaramos uma variável com var
// o Javascript aplica um processo nestas que chamamos de HOISTING.
//O HOISTING ou elevação, coloca todas as variáveis do tipo var no topo do programa.
//Isso faz com que se existirem variáveis com mesmo nome, elas se sobrepõem.
// let nr1 = 10;
// let nr2 = 5;
// //IF TERNÁRIO - DESCOBRINDO SE O NÚMERO É PAR OU IMPAR
// let resultado = !(nr1 % nr2) ? "PAR" : "IMPAR";
// console.log(resultado);

//Recuperar um elemento do HTML com a função getElementById(parâmetro)
// const mn = document.getElementById("menu");
// console.log(mn.textContent);

// recuperando uma collection de elementos ...

// const aElements = document.getElementsByTagName("a");

// const aElementsArray = [...aElements];

// aElementsArray.forEach((a) => {
//   console.log(a);
// });

// // declarando um arry em Javascript

// let nr1 = [1, 2, 3, 4, 5];
// let nr2 = [6, 7, 8, 9, 10];
// // let nr3 = [nr1,nr2]
// console.log(nr1);

// // OPERADOR SPREAD(SIGINIFICA ESPALHAR)...
// let nr3 = [...nr1, ...nr2];
// console.log("novo array " + nr3);

// nr3.forEach((numero) => {
//   console.log("item do array: " + numero);
// });

// console.log("novo array" + nr3);
// nr2.push(11);
// console.table(nr1);

// const imgElements = [...document.getElementsByTagName("img")];

// // const imgElementsArray =  [...imgElements];

// imgElements.forEach((img) => {
//   console.log(`Path das imagens: ${img.src}`);
// });

// const botao = document.querySelector("div >button");
// console.log(botao);

// // botao.addEventListener("click", () => {
// //   alert("TCHAU!!");
// // });

// // Inserir intens ao final do array com o método push;
// console.log(frutas);
// frutas.push("kiwi");

// // Inserir intens ao começo do array com o método unshift;
// frutas.unshift("melancia");
// console.log(frutas);

// // // remover intens do final do array com o método pop;
// console.log(frutas);
// frutas.pop();

// // // remover intens do começo do array com o método shift;
// console.log(frutas);
// frutas.shift();

// // Realizando a busca de um intem ano array usando método indeOof(iten)
// // quando usamos o indexOF(iten) ele retorna o indice do item procurad.

// // // Utilizando o método splice(indice do item, qtd de vezes que ele será
// // //removido), para remover o item do array em conjunto com o indexof(iten).
// let indice = frutas.indexOf("abacate");

// console.log("FRUTAS QUE ESTAVA NO INDICE ANTES DA REMOÇÃO: " + frutas[indice]);
// frutas.splice(indice, 1);
// console.log("FRUTAS QUE FICOU NO INDICE ANTES DA REMOÇÃO: " + frutas[indice]);
// console.table(frutas);

// // // estrutura de repetição para interação de collections
// // let frutas = ["laranja", "banana", "acerola", "abacate", "caqui", "uva"];

// // // // loop for
// // // for (let x = 0; x < frutas.length; x++) {
// // //   console.log("valor do X = " + x);
// // // }

// // // for (const frutas of frutas) {
// // //   console.log("frutas" + frutas);
// // // }

// // frutas.map((fruta, key) => {
// //   console.log(`fruta nr ${key + 1} ${frutas}`);
// });

const iputUser = document.querySelectorAll("#idUser");

inputUser.addEventListner("focus", () => {
  inputUser.setAttribute("style", "outline-color: #ff0000;");
});
