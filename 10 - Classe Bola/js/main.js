// Ao carregar a tela
window.onload = function() {

  // Referenciando
  // o canvas
  let canvas = document.getElementById("canvas");
  // o contexto
  let contexto = canvas.getContext("2d");

  let bola1 = new Bola(contexto);
  bola1.x           = 100;
  bola1.y           = 200;
  bola1.velocidadeX = 20;
  bola1.velocidadeY = -10;
  bola1.cor         = "red";
  bola1.raio        = 20;

  let bola2 = new Bola(contexto);
  bola2.x           = 200;
  bola2.y           = 100;
  bola2.velocidadeX = -10;
  bola2.velocidadeY = 20;
  bola2.cor         = "blue";
  bola2.raio        = 30;

  let animacao = new Animacao(contexto);
  animacao.novoSprite(bola1);
  animacao.novoSprite(bola2);
  animacao.ligar();
}
