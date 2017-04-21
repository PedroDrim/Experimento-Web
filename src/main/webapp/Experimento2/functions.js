function calcular() {
  var peso = document.formulario.peso.value;
  var altura = document.formulario.altura.value;
  var imc = peso/(altura*altura);
  alert("O IMC é: " + imc);
}
