window.onload = function() {
  // Referências do Canvas
  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d");

  let teclado = new Teclado(document);
  let animacao = new Animacao(contexto);

  let imgSonic = new Image();
  imgSonic.src = "img/spritesheet.png";

  let sonic = new Sonic(contexto, teclado, imgSonic);
  sonic.x = 0;
  sonic.y = 200;
  animacao.novoSprite(sonic);

  // Animação
  // Depois que a imagem for carregada
  imgSonic.onload = function() {
    animacao.ligar();
  }

}
