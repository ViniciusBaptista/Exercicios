function pulalinha() {
  document.write("<br>");
};

function mostra(frase) {
  document.write(frase);
  pulalinha();
};

function calculaIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
};

var nome = prompt("Bom Dia! Qual é o seu nome?");
var alturaDoUsuario = prompt("Qual é a sua altura?");
var pesoDoUsuario = prompt("E o seu peso?");

var imcDoUsuario = Math.round(calculaIMC(alturaDoUsuario, pesoDoUsuario));
	mostra(nome + ", o seu imc é " + imcDoUsuario);

if(imcDoUsuario < 18.5) {
	mostra("Seu IMC indica que você está ABAIXO do peso.");
}

if(imcDoUsuario > 35) {
	mostra("Seu IMC indica que você está ACIMA do peso");
}

if(imcDoUsuario > 18.5 && imcDoUsuario < 35) {
	mostra("OK! Seu IMC está entre os dois limites.");
}
