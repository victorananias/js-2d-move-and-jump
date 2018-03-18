function Ovni(imagem, contexto) {
  this.imagem = imagem;
  this.contexto = contexto;
  this.x = 0;
  this.y = 0;
  this.velocidade = 0;
}

Ovni.prototype = {
  atualizar: function() {
    this.y += this.velocidade;

    // Se o ovni chegar ao fim da tela será excluido
    if(this.y > this.contexto.canvas.height) {
      this.animacao.excluirSprite(this);
      this.colisor.excluirSprite(this);
    }
  },

  desenhar: function() {
    this.contexto.drawImage(
      this.imagem,
      this.x,
      this.y,
      this.imagem.width,
      this.imagem.height
    );
  },

  retangulosColisao: function() {
      let retangulos =
      [
          {x: this.x + 20, y: this.y + 01, largura: 25, altura: 10 },
          {x: this.x + 02, y: this.y + 11, largura: 60, altura: 12 },
          {x: this.x + 20, y: this.y + 23, largura: 25, altura: 07 },
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

  colidiuCom: function(outro) {
      if (outro instanceof Tiro) {
        this.animacao.excluirSprite(this);
        this.colisor.excluirSprite(this);
        this.animacao.excluirSprite(outro);
        this.colisor.excluirSprite(outro);
      }
  }
}
