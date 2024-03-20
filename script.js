var botao = document.getElementById("botao")
botao.addEventListener("click", alertar, false);

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var saida = document.getElementById("saida-de-dados");
var telefone = document.getElementById("telefone");
var CEP = document.getElementById("CEP");
var logra = document.getElementById("logra");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
function alertar(event){

saida.innerText = "nome: " +nome.value 
+"\n Email: " +email.value 
+ "\n Telefone: " + telefone.value
+ "\n CEP: " + CEP.value
+ "\n Logradouro: " + logra.value
+ "\n Bairro: " + bairro.value
+ "\n Cidade: " + cidade.value
+ "\n Estado: " + estado.value;
}