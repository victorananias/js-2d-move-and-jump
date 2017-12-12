function Colisor() {
  this.sprites = [];
}

Colisor.prototype = {
  novoSprite: function(sprite) {
    this.sprites.push(sprite);
  },
  processar: function() {
    for (let i in this.sprites) {
      for (let j in this.sprites) {
        // Não colidir um sprite com ele mesmo
        if (i == j) continue;

        // Abstrair a colisão
        this.testarColisao(this.sprites[i], this.sprites[j]);
      }
    }
  },
  testarColisao: function(sprite1, sprite2) {
    // Obter os retangulos de colisão de cada sprite
    // devolvem arrays com dados dos retangulo
    let retangulos1 = sprite1.retangulosColisao();
    let retangulos2 = sprite2.retangulosColisao();

    // Testar as colisões entre eles
    colisoes:
    for (let i in retangulos1) {
      for (let j in retangulos2) {
        // Ainda abstraindo a fórmula
        if(this.retangulosColidem(retangulos1[i], retangulos2[j])) {
          // Se houver colisão irá notificar
          sprite1.colidiuCom(sprite2);
          sprite2.colidiuCom(sprite1);

          // Para assim que houver colisão
          break colisoes;
        }
      }
    }
  },
  retangulosColidem: function(retangulos1, retangulos2) {
    // Retorna se houve ou não interseção entre os retangulos
    return (retangulos1.x + retangulos1.largura) > retangulos2.x &&
            retangulos1.x < (retangulos2.x + retangulos2.largura) &&
            (retangulos1.y + retangulos1.altura) > retangulos2.y &&
            retangulos1.y < (retangulos2.y + retangulos2.altura);
  }
}
