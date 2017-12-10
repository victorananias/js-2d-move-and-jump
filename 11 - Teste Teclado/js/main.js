window.onload = function() {
  // Referências do Canvas
  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d");

  // Posição inicial do personagem
  let posicao = 0;
  desenharPersonagem();

  document.addEventListener("keydown",  function(evento) {
    // Se a tecla "Flecha Esquerda" for pressionada
    if(evento.keyCode == 37) {
      posicao -= 10;
      desenharPersonagem();
    }
    // Se a tecla "Flecha Direita" for pressionada
    else if(evento.keyCode == 39) {
      posicao += 10;
      desenharPersonagem();
    }
  });

  // Função que desenha o personagem
  function desenharPersonagem() {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.fillRect(posicao, 100, 20, 50);
  }
}
