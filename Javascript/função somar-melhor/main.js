function Soma()
{
var e1 = parseInt(document.getElementById("v1").value);
var e2 = parseInt(document.getElementById("v2").value);
var resultado = e1 + e2;
document.getElementById("res").innerHTML= "Resposta: " + resultado;
}