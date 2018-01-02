function Nave(contexto, teclado, imagem) {
  this.contexto = contexto;
  this.teclado = teclado;
  this.imagem = imagem;
  this.x = 0;
  this.y = 0;
  this.velocidade = 0;
}

Nave.prototype = {
  atualizar: function() {
    if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0)
      this.x -= this.velocidade;

    if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.contexto.canvas.width - this.imagem.width)
      this.x += this.velocidade;

    if(this.teclado.pressionada(SETA_ACIMA) && this.y > 0)
      this.y -= this.velocidade;

    if(this.teclado.pressionada(SETA_ABAIXO) && this.y < this.contexto.canvas.height - this.imagem.height)
      this.y += this.velocidade;
  },

  desenhar: function() {
    this.contexto.drawImage(this.imagem, this.x, this.y, this.imagem.width, this.imagem.height);
  }
}
