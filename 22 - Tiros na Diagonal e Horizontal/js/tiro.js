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

  },

  desenhar: function() {
    let contexto = this.contexto;

    contexto.save();
    contexto.fillStyle = this.cor;
    contexto.fillRect(this.x, this.y, this.largura, this.altura);
    contexto.restore();
  }
}
