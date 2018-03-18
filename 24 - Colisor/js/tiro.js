function Tiro(contexto, teclado, nave) {
  this.contexto = contexto;
  this.nave = nave;
  this.teclado = teclado;

  this.cor = "red";
  this.largura = 4;
  this.altura = 20;
  this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
  this.y = nave.y - this.altura;

  this.velocidadeY = 10;
  this.velocidadeX = 0;

  if(this.teclado.pressionada(SETA_ESQUERDA)) {
      if(this.teclado.pressionada(SETA_ACIMA))
          this.velocidadeX = 10;

      else if(this.teclado.pressionada(SETA_ABAIXO))
          this.velocidadeX = -10;

      else if(this.teclado.pressionada(SHIFT)) {
          this.velocidadeY = 0;
          this.velocidadeX = 10;
          this.largura = 20;
          this.altura = 4;
          this.y = nave.y + (nave.imagem.height / 2);
          this.x = nave.x - nave.imagem.width/2;
      }
  }

  if(this.teclado.pressionada(SETA_DIREITA)) {
      if(this.teclado.pressionada(SETA_ACIMA))
          this.velocidadeX = -10;

      else if(this.teclado.pressionada(SETA_ABAIXO))
          this.velocidadeX = +10;

      else if(this.teclado.pressionada(SHIFT)) {
          this.velocidadeY = 0;
          this.velocidadeX = -10;
          this.largura = 20;
          this.altura = 4;
          this.y = nave.y + (nave.imagem.height / 2);
          this.x = nave.x + nave.imagem.width;
      }
  }
}

Tiro.prototype = {
  atualizar: function() {
    this.y -= this.velocidadeY;
    this.x -= this.velocidadeX;

    // se o tiro passar do começo da tela será excluido
    if(this.y < -this.altura) {
      this.animacao.excluirSprite(this);
      this.colisor.excluirSprite(this);
    }
  },

  desenhar: function() {
    let contexto = this.contexto;

    contexto.save();
    contexto.fillStyle = this.cor;
    contexto.fillRect(this.x, this.y, this.largura, this.altura);
    contexto.restore();
  },

  retangulosColisao: function() {
    return [{x: this.x, y: this.y, largura: this.largura, altura: this.altura}];
  }
}
