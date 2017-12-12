window.onload = function() {
  // Referências do Canvas
  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d");

  let bola1 = new Bola(contexto);
  bola1.x = 200;
  bola1.y = 200;
  bola1.velocidadeX = 10;
  bola1.velocidadeY = -5;
  bola1.cor = "blue";
  bola1.raio = 20;

  let bola2 = new Bola(contexto);
  bola2.x = 300;
  bola2.y = 300;
  bola2.velocidadeX = -5;
  bola2.velocidadeY = 10;
  bola2.cor = "red";
  bola2.raio = 30;

  let colisor = new Colisor();
  colisor.novoSprite(bola1);
  colisor.novoSprite(bola2);

  requestAnimationFrame(animar);

  function animar() {
    // Limpando a tela
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // Atualizando os sprites
    bola1.atualizar();
    bola2.atualizar();

    // Desenhando
    bola1.desenhar();
    bola2.desenhar();

    // Processar colisões
    colisor.processar();

    requestAnimationFrame(animar);
  }

}
