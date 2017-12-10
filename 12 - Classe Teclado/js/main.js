window.onload = function() {
  // Referências do Canvas
  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d");

  // Posição inicial do personagem
  let posicao = 0;
  desenharPersonagem();

  // Instânciando a classe teclado
  let teclado = new Teclado(document);

  requestAnimationFrame(animar);


  function animar() {
    // Verifica se irá mover para a esquerda
    if(teclado.pressionada(SETA_ESQUERDA)) {
      posicao -= 10;
    }
    // Verifica se irá mover para a direita
    else if(teclado.pressionada(SETA_DIREITA)) {
      posicao += 10;
    }
    // Desenhando o personagem
    desenharPersonagem();
    requestAnimationFrame(animar);
  }

  // Função que desenha o personagem
  function desenharPersonagem() {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.fillRect(posicao, 100, 20, 50);
  }

}
