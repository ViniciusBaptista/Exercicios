function mostra(frase) {
  document.write(frase + "<br>");
};

var anoComoTexto = prompt("Informe o ano inicial");
var anoDeCopas = parseInt(anoComoTexto);
var anoLimite = prompt("Qual é o ano limite?");

while(anoDeCopas <= anoLimite) {
  mostra(anoDeCopas + " tem Copa!");
  anoDeCopas = anoDeCopas + 4;
} 

mostra("Até que enfim, esses foram os anos de copa até " + anoLimite);
