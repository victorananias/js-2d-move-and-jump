document.addEventListener('DOMContentLoaded', function() {

  let imagensCarregadas = 0;
  let totalImagens = 5;

  let imgEspaco = new Image();
  imgEspaco.src = "img/fundo-espaco.png";
  let imgEstrelas = new Image();
  imgEstrelas.src = "img/fundo-estrelas.png";
  let imgNuvens = new Image();
  imgNuvens.src = "img/fundo-nuvens.png";
  let imgNave = new Image();
  imgNave.src = "img/nave.png";
  let imgOvni = new Image();
  imgOvni.src = "img/ovni.png";


  let canvas = document.getElementById("canvas");
  let contexto = canvas.getContext("2d")

  let animacao = new Animacao(contexto);
  let teclado = new Teclado(document);

  let fundoEspaco = new Fundo(contexto, imgEspaco);
  let fundoNuvens = new Fundo(contexto, imgNuvens);
  let fundoEstrelas = new Fundo(contexto, imgEstrelas);
  let nave = new Nave(contexto, teclado, imgNave);
  let colisor = new Colisor();

  imgEspaco.onload = carregando;
  imgNuvens.onload = carregando;
  imgEstrelas.onload = carregando;
  imgNave.onload = carregando;
  imgOvni.onload = carregando;

  function carregando() {
    imagensCarregadas++;
    if(imagensCarregadas == totalImagens) iniciar();
  }

  function iniciar() {
    fundoEspaco.velocidade = 3;
    fundoNuvens.velocidade = 7;
    fundoEstrelas.velocidade = 10;

    nave.x = canvas.width / 2 - imgNave.width / 2;
    nave.y = canvas.height - imgNave.height;
    nave.velocidade = 5;

    teclado.disparou(ESPACO, function() {
      nave.atirar();
    });
    
    animacao.novoProcessamento(colisor);

    colisor.novoSprite(nave);

    animacao.novoSprite(fundoEspaco);
    animacao.novoSprite(fundoNuvens);
    animacao.novoSprite(fundoEstrelas);
    animacao.novoSprite(nave);
    animacao.ligar();

    setInterval(novoOvni, 1000);
  }

  function novoOvni() {
    let ovni = new Ovni(imgOvni, contexto);

    ovni.velocidade = Math.floor(5 + Math.random() * (20 - 5 + 1));
    ovni.x = Math.floor(Math.random() * (canvas.width - imgOvni.width + 1));
    ovni.y = + imgOvni.height;

    animacao.novoSprite(ovni);
    colisor.novoSprite(ovni);
  }

  function aleatorio(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

}, false);
