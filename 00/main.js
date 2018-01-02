// Ao carregar a tela
window.onload = function() {

  // Referenciando
  // o canvas
  let canvas = document.getElementById("canvas");
  // o contexto
  let contexto = canvas.getContext("2d");

  let bola1 = new Bola(contexto);
  bola1.x           = 360;
  bola1.y           = 250;
  bola1.velocidadeX = 0;
  bola1.velocidadeY = 0;
  bola1.cor         = "grey";
  bola1.raio        = 20;

  let bola2 = new Bola(contexto);
  bola2.x           = 400;
  bola2.y           = 250;
  bola2.velocidadeX = 0;
  bola2.velocidadeY = 0;
  bola2.cor         = "grey";
  bola2.raio        = 20;

  let bola3 = new Bola(contexto);
  bola3.x           = 440;
  bola3.y           = 250;
  bola3.velocidadeX = 0;
  bola3.velocidadeY = 0;
  bola3.cor         = "grey";
  bola3.raio        = 20;

  let bola4 = new Bola(contexto);
  bola4.x           = 480;
  bola4.y           = 250;
  bola4.velocidadeX = 0;
  bola4.velocidadeY = 0;
  bola4.cor         = "grey";
  bola4.raio        = 20;

  let bolaB1 = new Bola(contexto);
  bolaB1.x           = 320; //
  bolaB1.y           = 250; //
  bolaB1.velocidadeX = -12;
  bolaB1.velocidadeY = -5;
  bolaB1.cor         = "red";
  bolaB1.raio        = 20;

  // let bolaB2 = new Bola(contexto);
  // bolaB2.x           = 281; // 39
  // bolaB2.y           = 235; // 15
  // bolaB2.velocidadeX = 0;
  // bolaB2.velocidadeY = 0;
  // bolaB2.cor         = "red";
  // bolaB2.raio        = 20;
  //
  // let bolaB3 = new Bola(contexto);
  // bolaB3.x           = 242; // 39
  // bolaB3.y           = 220; // 15
  // bolaB3.velocidadeX = 0;
  // bolaB3.velocidadeY = 0;
  // bolaB3.cor         = "red";
  // bolaB3.raio        = 20;
  //
  // let bolaB4 = new Bola(contexto);
  // bolaB4.x           = 203; // 39
  // bolaB4.y           = 205; // 15
  // bolaB4.velocidadeX = 0;
  // bolaB4.velocidadeY = 0;
  // bolaB4.cor         = "red";
  // bolaB4.raio        = 20;
  //
  // let bolaT1 = new Bola(contexto);
  // bolaT1.x           = 520; //
  // bolaT1.y           = 250; //
  // bolaT1.velocidadeX = 0;
  // bolaT1.velocidadeY = 0;
  // bolaT1.cor         = "red";
  // bolaT1.raio        = 20;
  //
  // let bolaT2 = new Bola(contexto);
  // bolaT2.x           = 559; // 39
  // bolaT2.y           = 235; // 15
  // bolaT2.velocidadeX = 0;
  // bolaT2.velocidadeY = 0;
  // bolaT2.cor         = "red";
  // bolaT2.raio        = 20;
  //
  // let bolaT3 = new Bola(contexto);
  // bolaT3.x           = 598; // 39
  // bolaT3.y           = 220; // 15
  // bolaT3.velocidadeX = 0;
  // bolaT3.velocidadeY = 0;
  // bolaT3.cor         = "red";
  // bolaT3.raio        = 20;
  //
  // let bolaT4 = new Bola(contexto);
  // bolaT4.x           = 637;
  // bolaT4.y           = 205;
  // bolaT4.velocidadeX = 0;
  // bolaT4.velocidadeY = 0;
  // bolaT4.cor         = "red";
  // bolaT4.raio        = 20;

  let animacao = new Animacao(contexto);
  animacao.novoSprite(bola1);
  animacao.novoSprite(bola2);
  animacao.novoSprite(bola3);
  animacao.novoSprite(bola4);
  // animacao.novoSprite(bolaT1);
  // animacao.novoSprite(bolaT2);
  // animacao.novoSprite(bolaT3);
  // animacao.novoSprite(bolaT4);
  animacao.novoSprite(bolaB1);
  // animacao.novoSprite(bolaB2);
  // animacao.novoSprite(bolaB3);
  // animacao.novoSprite(bolaB4);
  animacao.ligar();
}
