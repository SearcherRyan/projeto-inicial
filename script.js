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
    const url = `https://viacep.com.br/ws/${CEP.value}/json`;

fetch(url).then
(function(resposta){
    return resposta.json();
})
.then(
    function(dadosDoEndereco){
        logra.value = dadosDoEndereco.logradouro;
        bairro.value = dadosDoEndereco.bairro;
        cidade.value = dadosDoEndereco.localidade;
        estado.value = dadosDoEndereco.uf;
        complemento.value = dadosDoEndereco.complemento;
    }
)
.catch(function(e){
    alert(e.message());
});

saida.innerText = "nome: " +nome.value 
+"\n Email: " +email.value 
+ "\n Telefone: " + telefone.value
+ "\n CEP: " + CEP.value
+ "\n Numero: " + numero.value
+ "\n Complemento: " + comp.value
+ "\n Logradouro: " + logra.value
+ "\n Bairro: " + bairro.value
+ "\n Cidade: " + cidade.value
+ "\n Estado: " + estado.value;
}