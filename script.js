var botao = document.getElementById("botao")
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
function alertar(event){
    alert("Você clicou no botão!!! " + "" +nome.value);
var numero = 2;
var resul = numero % 2;
if(resul == 0){
    alert("Numero par !!!: "+ numero);
}
}