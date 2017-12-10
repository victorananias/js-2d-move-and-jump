window.onload = function() {
  // Referências do Canvas
  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d");

  // Instânciando a classe teclado
  let teclado = new Teclado(document);
  let animacao = new Animacao(contexto);

  let heroi = new Heroi(contexto, teclado, animacao);
  heroi.x = 0;
  heroi.y = 100;
  animacao.novoSprite(heroi);

  // Atribuindo a função atirar() a tecla ESPAÇO
  teclado.disparou(ESPACO, function() {
    heroi.atirar();
  });

  animacao.ligar();
}
