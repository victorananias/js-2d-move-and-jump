function Nave(contexto, teclado, imagem) {
  this.contexto = contexto;
  this.teclado = teclado;
  this.imagem = imagem;
  this.x = 0;
  this.y = 0;
  this.velocidade = 0;
  this.vidas = 3;
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
  },

  atirar: function() {
    let tiro = new Tiro(this.contexto, this.teclado, this);
    this.animacao.novoSprite(tiro);
    this.colisor.novoSprite(tiro);
  },

  retangulosColisao: function() {
    let retangulos =
    [
      {x: this.x + 2,  y: this.y + 19, largura: 9,  altura: 13},
      {x: this.x + 13, y: this.y + 3,  largura: 10, altura: 33},
      {x: this.x + 25, y: this.y + 19, largura: 9,  altura: 13}
    ];

    // Mostrando a hitbox
    // for(let i in retangulos) {
    //   this.contexto.save();
    //   this.contexto.strokeStyle = "yellow";
    //   this.contexto.strokeRect(
    //       retangulos[i].x,
    //       retangulos[i].y,
    //       retangulos[i].largura,
    //       retangulos[i].altura
    //   );
    //
    //   this.contexto.restore();
    // }

    return retangulos;
  },
  morrer: function() {
      this.vidas--;
  },
  destruirInimigo: function(inimigo) {
      this.animacao.excluirSprite(inimigo);
      this.colisor.excluirSprite(inimigo);
  },
  colidiuCom: function(outro) {
      if(outro instanceof Ovni) {
          
          this.morrer();
          this.destruirInimigo();

          if(this.vidas < 0 ) {
              this.animacao.desligar();
              alert("SE FODEU");
          }
          else {
              this.recomecar();
          }
      }
  },
  recomecar: function() {
      this.x = this.contexto.canvas.width / 2 - 18;
      this.y = this.contexto.canvas.height - 48;
  }

}
