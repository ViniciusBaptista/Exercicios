function pulalinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulalinha();
}

var tanqueg = 40
var ccg = 480
mostra("Seu carro tem um tanque de 40 litros. Com gasolina, e usando todo o tanque, você fez um caminho com gasolina de 480 quilômetro. <br>" + "Qual é o consumo de gasolina? <br>" + (ccg / tanqueg) + " km/L" + "<br>");

var tanquea = 30
var cca = 300
mostra("Seu carro tem um tanque de 40 litros. Com álcool, e usando todo o tanque, você fez um caminho com gasolina de 300 quilômetros. <br>" + "Qual é o consumo de álcool? <br>" + (cca / tanquea) + " km/L <br>");

var pdg = 2.90 
var csdg = 12
var pda = 2.40
var csda = 10
mostra("Qual é o preco por kilometro, tanto do álcool quanto da gasolina?<br>" + "R$" + (csdg / pdg).toFixed(2) + " preco por kilometro (gasolina)<br>" + "R$" + (csda / pda).toFixed(2) + " preco por kilometro (álcool)");
