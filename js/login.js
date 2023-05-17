"use strict";


//LISTA DE USUÁRIOS
let listaDeUsuarios = [

  {
    nomeCompelto : "José das couves",
    nomeUsuario : "Jose",
    senhaUsuario: "123456",
  }
  ,
  {
    nomeCompelto : "João Paulino",
    nomeUsuario : "joao",
    senhaUsuario: "123456",
  }
  ,
  {
    nomeCompelto : "Maria Tomaite",
    nomeUsuario : "maria",
    senhaUsuario: "123456",
  }
  ,
  {
    nomeCompelto : "Paulo da Selva",
    nomeUsuario : "paulo",
    senhaUsuario: "123456",
  }
];

localStorage.setItem("listaUser",JSON.stringify(listaDeUsuarios));

addEventListener("click", (evento) => {
  let userInput = document.querySelector("#idUser");
  let passInput = document.querySelector("#idPass");

  // // MOSTRAR SENHA

  // const eyePass = document.querySelector(".fa-eye");

  // // MOSTRAR SENHA



  if(evento.target.className == "fa fa-eye" || evento.target.className == "fa fa-eye-slash"){

    evento.target.setAttribute("style", "cursor:pointer");

    if(passInput.getAttribute("type") == "password"){
      passInput.setAttribute("type", "text");
      evento.target.setAttribute("class", "fa fa-eye-slash");
    }else{
      evento.target.setAttribute("style", "cursor:pointer");
      evento.target.setAttribute("class", "fa fa-eye");
      passInput.setAttribute("type", "password");
    }

  }

  let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem("listaUser"));


  if (evento.target.id == "btnSubmit") {
    try {
      listaDeUsuariosRecuperada.forEach((usuario) => {
        if (
          userInput.value == usuario.nomeUsuario &&
          passInput.value == usuario.senhaUsuario
        ) {
          throw "USUÁRIO VALIDADO!";
        }
      });

      throw "USUÁRIO OU SENHA INCORRETOS!";
    } catch (msg) {
      if (msg == "USUÁRIO VALIDADO!") {
        //
        window.location.href = "../sucesso.html";

      } else {
        console.log("USUÁRIO OU SENHA INCORRETOS!");
      }
    }
  }
});
