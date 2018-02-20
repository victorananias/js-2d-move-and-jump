function Tiro(contexto, nave, teclado) {
  this.contexto = contexto;
  this.nave = nave;

  this.cor = "red";
  this.largura = 4;
  this.altura = 20;
  this.teclado = teclado;
  this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
  this.y = nave.y - this.altura;
  this.velocidade = 10;
  this.direcao = "acima";
}

Tiro.prototype = {
  atualizar: function() {
    if(this.teclado.pressionada(SETA_ESQUERDA))
      this.direcao = "esquerda";
      this.altura = 4;
      this.largura = 20;

    if(this.teclado.pressionada(SETA_DIREITA))
      this.direcao = "direita";
      this.altura = 4;
      this.largura = 20;

    if(this.teclado.pressionada(SETA_ACIMA))
      this.direcao = "acima";
      this.largura = 4;
      this.altura = 20;

    if(this.teclado.pressionada(SETA_ABAIXO))
      this.direcao = "abaixo";
      this.largura = 4;
      this.altura = 20;

    if(this.direcao == "esquerda") {
      this.x -= this.velocidade;
    }
    if(this.direcao == "direita") {
      this.x += this.velocidade;
    }
    if(this.direcao == "acima") {
      this.y -= this.velocidade;
    }
    if(this.direcao == "abaixo") {
      this.y += this.velocidade;
    }

  },

  desenhar: function() {
    let contexto = this.contexto;

    contexto.save();
    contexto.fillStyle = this.cor;
    contexto.fillRect(this.x, this.y, this.largura, this.altura);
    contexto.restore();
  }
}
