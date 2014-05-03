function mostra(frase) {
  document.write(frase + "<br>");
};

var anoComoTexto = prompt("Informe o ano inicial");
var anoDeCopa = parseInt(anoComoTexto);
var anoLimite = prompt("Qual é o ano limite?");

while(anoDeCopa <= anoLimite) {
  mostra(anoDeCopa + " tem Copa!");
  anoDeCopa = anoDeCopa + 4;
} 

mostra("Até que enfim, esses foram os anos de copa até " + anoLimite);
