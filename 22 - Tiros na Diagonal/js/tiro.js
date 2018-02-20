function Tiro(contexto, nave, teclado) {
	this.contexto = contexto;
	this.nave = nave;

	this.cor = "red";
	this.largura = 4;
	this.altura = 20;
	this.teclado = teclado;
	this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
	this.y = nave.y - this.altura;
  
	this.velocidadeY = 10;
	this.velocidadeX = 0;
	
	if(this.teclado.pressionada(SETA_ESQUERDA) && (this.teclado.pressionada(SETA_ACIMA) || this.teclado.pressionada(SETA_ABAIXO))) this.velocidadeX = -10;
    else if(this.teclado.pressionada(SETA_DIREITA) && (this.teclado.pressionada(SETA_ACIMA) || this.teclado.pressionada(SETA_ABAIXO))) this.velocidadeX = 10;
		
}

Tiro.prototype = {
    atualizar: function() {
		
      this.y -= this.velocidadeY;
      this.x -= this.velocidadeX;

  },

  desenhar: function() {
    let contexto = this.contexto;

    contexto.save();
    contexto.fillStyle = this.cor;
    contexto.fillRect(this.x, this.y, this.largura, this.altura);
    contexto.restore();
  }
}
