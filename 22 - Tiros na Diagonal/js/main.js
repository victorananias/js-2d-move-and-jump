window.onload = function() {

  let imagensCarregadas = 0;
  let totalImagens = 4;

  let imgEspaco = new Image();
  imgEspaco.src = "img/fundo-espaco.png";
  let imgEstrelas = new Image();
  imgEstrelas.src = "img/fundo-estrelas.png";
  let imgNuvens = new Image();
  imgNuvens.src = "img/fundo-nuvens.png";
  let imgNave = new Image();
  imgNave.src = "img/nave.png";

  imgEspaco.onload = carregando;
  imgNuvens.onload = carregando;
  imgEstrelas.onload = carregando;
  imgNave.onload = carregando;

  function carregando() {
    imagensCarregadas++;
    if(imagensCarregadas == totalImagens) iniciar();
  }

  function iniciar() {

    let canvas = document.getElementById("canvas");
    let contexto = canvas.getContext("2d")

    let animacao = new Animacao(contexto);
    let teclado = new Teclado(document);

    let fundoEspaco = new Fundo(contexto, imgEspaco);
    let fundoNuvens = new Fundo(contexto, imgNuvens);
    let fundoEstrelas = new Fundo(contexto, imgEstrelas);
    let nave = new Nave(contexto, teclado, imgNave);

    fundoEspaco.velocidade = 3;
    fundoNuvens.velocidade = 7;
    fundoEstrelas.velocidade = 10;

    nave.x = canvas.width / 2 - imgNave.width / 2;
    nave.y = canvas.height - imgNave.height;
    nave.velocidade = 5;

    teclado.disparou(ESPACO, function() {
      nave.atirar();
    });

    animacao.novoSprite(fundoEspaco);
    animacao.novoSprite(fundoNuvens);
    animacao.novoSprite(fundoEstrelas);
    animacao.novoSprite(nave);
    animacao.ligar();
  }
}
