function Tiro(contexto, nave) {
  this.contexto = contexto;
  this.nave = nave;

  this.cor = "red";
  this.largura = 4;
  this.altura = 20;
  this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
  this.y = nave.y - this.altura;
  this.velocidade = 10;
}

Tiro.prototype = {
  atualizar: function() {
    this.y -= this.velocidade;

    // se o tiro passar do começo da tela será excluido
    if(this.y < -this.altura) {
      this.animacao.excluirSprite(this);
      this.colisor.excluirSprite(this);
    }
  },

  desenhar: function() {
    let contexto = this.contexto;

    contexto.save();
    contexto.
    fillStyle = this.cor;
    contexto.fillRect(this.x, this.y, this.largura, this.altura);
    contexto.restore();
  },

  retangulosColisao: function() {
    return [{x: this.x, y: this.y, largura: this.largura, altura: this.altura}];
  },

  colidiuCom: function(outro) {

  }
}
