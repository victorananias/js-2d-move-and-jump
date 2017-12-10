window.onload = function() {
  // Referências do Canvas
  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d");

  // Criando um objeto imagem
  let imgSonic = new Image();
  // Atribindo um arquivo de imagem
  imgSonic.src = "img/spritesheet.png"

  // Depois que a imagem for carregada
  imgSonic.onload = function() {
    
    // Valores referentes imagem escolhida
    let linhas  = 3;
    let colunas = 8;

    // Dimensões de cada sprite
    let largura = imgSonic.width/colunas;
    let altura  = imgSonic.height/linhas;

    // Quadro a ser utilizado
    let linha = 2;
    let coluna = 7;

    // Posição de recorte
    let x = largura * coluna;
    let y = altura * linha;

    contexto.drawImage(
      imgSonic,
      x,
      y,
      largura,
      altura,
      100,
      100,
      largura,
      altura
    );
  }
}
