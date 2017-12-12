
function Bola(contexto) {
  this.contexto = contexto;
  this.x = 0;
  this.y = 0;
  this.velocidadeX = 0;
  this.velocidadeY = 0;

  // Atributos de desenho padrão;
  this.cor = "black";
  this.raio = 10;
}

Bola.prototype = {
  atualizar: function() {
    // quando a borda da bola encostar no limite do canvas
    // a direção pra onde ela irá se mover é invertida
    if (this.x < this.raio ||
      this.x > this.contexto.canvas.width - this.raio)
    {
      this.velocidadeX *= -1;
    }


    if (this.y < this.raio ||
      this.y > this.contexto.canvas.height - this.raio)
    {
      this.velocidadeY *= -1;
    }

    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  },
  desenhar: function() {
    // Guardando configurações do contexto
    this.contexto.save();

    // Configurando o contexto de acordo com a Bola
    this.contexto.fillStyle = this.cor;

    // Desenhando
    this.contexto.beginPath();
    this.contexto.arc(this.x, this.y, this.raio, 0 , 2 * Math.PI, false);
    this.contexto.fill();

    // Voltando as configurações anteriores
    this.contexto.restore();
  }
}
