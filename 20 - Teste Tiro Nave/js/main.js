window.onload = function() {

  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d");

  let teclado = new Teclado(document);
  let animacao = new Animacao(contexto);

  let imgNave = new Image();
  imgNave.src = "img/nave.png";

  let nave = new Nave(contexto, teclado, imgNave);
  animacao.novoSprite(nave);

  teclado.disparou(ESPACO, function() {
    nave.atirar();
  });

  imgNave.onload = function() {
    nave.x = canvas.width / 2 - imgNave.width / 2;
    nave.y = canvas.height - imgNave.height;
    nave.velocidade = 5;
    animacao.ligar();
  }
}
