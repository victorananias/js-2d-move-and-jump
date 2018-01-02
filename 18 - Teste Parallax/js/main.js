window.onload = function() {

  let imgEspaco = new Image();
  imgEspaco.src = "img/fundo-espaco.png";
  let imgEstrelas = new Image();
  imgEstrelas.src = "img/fundo-estrelas.png";
  let imgNuvens = new Image();
  imgNuvens.src = "img/fundo-nuvens.png";

  let imagensCarregadas = 0;
  let totalImagens = 3;

  imgEspaco.onload = carregando;
  imgNuvens.onload = carregando;
  imgEstrelas.onload = carregando;

  function carregando() {
    imagensCarregadas++;
    if(imagensCarregadas == totalImagens) iniciar();
  }

  function iniciar() {
    let canvas = document.getElementById("canvas");
    let contexto = canvas.getContext("2d");

    /*Passando o contexto e a imagem para os objetos Fundo*/
    let fundoEspaco = new Fundo(contexto, imgEspaco);
    let fundoNuvens = new Fundo(contexto, imgNuvens);
    let fundoEstrelas = new Fundo(contexto, imgEstrelas);

    fundoEspaco.velocidade = 3;
    fundoNuvens.velocidade = 7;
    fundoEstrelas.velocidade = 10;

    let animacao = new Animacao(contexto);
    animacao.novoSprite(fundoEspaco);
    animacao.novoSprite(fundoNuvens);
    animacao.novoSprite(fundoEstrelas);
    animacao.ligar();
  }
}
