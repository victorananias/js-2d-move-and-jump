
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

    // Se a borda da bola encostar nas 'paredes' do canvas
    if(this.x < this.raio || this.x > (larguraCanvas - this.raio)) {
      // A direção horizontal será invertida
      this.velocidadeX *= -1;
      this.velocidadeY *= -1;
    }

    // Se a borda da bola encostar no 'chão' ou 'teto' do canvas
    if(this.y < this.raio || this.y > (alturaCanvas - this.raio)) {
      // A direção vertical será invertida
      this.velocidadeY *= -1;
      this.velocidadeX *= -1;
    }
    // Alterando a posição em que a bola será desenhada
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  },
  desenhar: function() {

  console.log("x: "+this.velocidadeX +" y: "+this.velocidadeY);
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
