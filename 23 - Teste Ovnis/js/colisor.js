function Colisor() {
  this.sprites = [];
  this.aoColidir = null;
}

Colisor.prototype = {
  novoSprite: function(sprite) {
    this.sprites.push(sprite);
    sprite.colisor = this;
  },

  processar: function() {
    // Iniciando objeto vazio
    let jaTestados = new Object();

    for (let i in this.sprites) {
      for (let j in this.sprites) {
        // Não colidir um sprite com ele mesmo
        if (i == j) continue;

        // Gerando string unicas para os objetos
        let id1 = this.stringUnica(this.sprites[i]);
        let id2 = this.stringUnica(this.sprites[j]);

        // Criando os arrays se ainda não foram criados
        if (!jaTestados[id1]) jaTestados[id1] = [];
        if (!jaTestados[id2]) jaTestados[id2] = [];

        // Testando repetição
        if (! (jaTestados[id1].indexOf(id2) >= 0 ||
              jaTestados[id2].indexOf(id1) >= 0)) {

          // Abstraindo colisão
          this.testarColisao(this.sprites[i], this.sprites[j]);

          // Registrando o teste
          jaTestados[id1].push(id2);
          jaTestados[id2].push(id1);
        }

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
    colisoes: // Label
    for (let i in retangulos1) {
      for (let j in retangulos2) {
        // Ainda abstraindo a fórmula
        if (this.retangulosColidem(retangulos1[i], retangulos2[j])) {

          // Se houver colisão irá notificar
          sprite1.colidiuCom(sprite2);
          sprite2.colidiuCom(sprite1);

          // Para assim que houver colisão
          if (this.aoColidir) this.aoColidir(sprite1, sprite2);

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
  },
  stringUnica: function(sprite) {
    // retorna o objeto 'convertido' em String
    let str = 1;
    let retangulos = sprite.retangulosColisao();

    for (let i in retangulos) {
      str += "x:" + retangulos[i].x + "," +
             "y:" + retangulos[i].y + "," +
             "l:" + retangulos[i].largura + "," +
             "a:" + retangulos[i].altura + "\n";
    }
    return str;
  }
}
