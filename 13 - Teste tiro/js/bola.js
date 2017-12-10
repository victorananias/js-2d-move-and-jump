
//Construtor
function Bola(contexto){
  this.contexto = contexto;
  this.x = 0;
  this.y = 0;
  this.velocidadeX = 0;
  this.velocidadeY = 0;

  // atributos do desenho padrão
  this.cor = "black";
  this.raio = 10;
}

// Protótipo com os métodos
Bola.prototype = {
  atualizar: function() {
    // Facilitando o entendimento
    let contexto      = this.contexto;
    let larguraCanvas = contexto.canvas.width;
    let alturaCanvas  = contexto.canvas.height;

    // Alterando a posição em que a bola será desenhada
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  },
  desenhar: function() {
    // Facilitando o entendimento
    let contexto  = this.contexto;
    let x         = this.x;     // X (centro)
    let y         = this.y;     // Y (centro)
    let raio      = this.raio;  // Raio
    let inicio    = 0;          // Início: 0 graus
    let termino   = 2*Math.PI;  // Término: 360 graus
    let sentido   = false;      // Sentido anti-horário

    // Guardando configurações atuais do contexto
    contexto.save();

    // Configundo o contexto de acordo com a bola
    contexto.fillStyle = this.cor;

    // Desenhando
    contexto.beginPath();
    contexto.arc(x, y, raio, inicio, termino, sentido);
    contexto.fill();

    // Voltando as configurações anteriores
    contexto.restore();
  }
}
