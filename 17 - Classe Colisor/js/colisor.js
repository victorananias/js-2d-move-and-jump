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
    let rets1 = sprite1.retangulosColisao();
    let rets2 = sprite2.retangulosColisao();

    // Testar as colisões entre eles
    colisoes:
    for (let i in rets1) {
      for (let j in rets2) {
        // Ainda abstraindo a fórmula
        if(this.retangulosColidem(rets1[i], rets2[j])) {
          // Se houver colisão irá notificar
          sprite1.colidiuCom(sprite2);
          sprite2.colidiuCom(sprite1);

          // Para assim que houver colisão

          break colisoes;
        }
      }
    }
  }
}
