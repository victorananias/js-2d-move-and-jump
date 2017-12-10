window.onload = function() {
  // Referências do Canvas
  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d");

  // Criando um objeto imagem
  let imgSonic = new Image();
  // Atribindo um arquivo de imagem
  imgSonic.src = "img/spritesheet.png";

  let spritesheet = new Spritesheet(contexto, imgSonic, 3, 8);

  // Duração de cada quadro
  spritesheet.intervalo = 60;

  // "correndo para a direita"
  spritesheet.linha = 1;

  // Animação
  // Depois que a imagem for carregada
  // Não utiliza () porque está atribuindo a função ao evento
  imgSonic.onload = gameLoop;

  function gameLoop() {
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);

    // Avançando a animação
    spritesheet.proximoQuadro();

    // Onde desenhar o quadro atual
    spritesheet.desenhar(100, 100);

    requestAnimationFrame(gameLoop);
  }
}
