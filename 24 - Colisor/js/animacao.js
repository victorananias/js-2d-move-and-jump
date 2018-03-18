function Animacao(contexto) {
  this.contexto = contexto;
  this.sprites = []; // os sprites são objetos
  this.ligado = false;
  this.processamentos = [];
  this.spritesExcluir = [];
  this.processamentosExcluir = [];
}

Animacao.prototype = {
  novoSprite: function(sprite) {
    this.sprites.push(sprite);
    sprite.animacao = this;
  },

  novoProcessamento: function(processamento) {
    this.processamentos.push(processamento);
    processamento.animacao = this;
  },

  ligar: function() {
    this.ligado = true;
    this.proximoFrame();
  },

  desligar: function() {
    this.ligado = false;
  },

  proximoFrame: function() {
    // Pode desligar?
    if (!this.ligado) return; // se verdadeiro, a execução para

    // esse 'for' percorre somente os elementos definidos do array,
    // utilizando a propriedade length o 'for' irá percorrer todas as posições
    // Atualizando o estado dos Sprites
    for (let i in this.sprites)
      this.sprites[i].atualizar();

    // Desenhando os Sprites
    for(let i in this.sprites)
      this.sprites[i].desenhar();

    // Processamentos gerais
    for(let i in this.processamentos) {
        this.processamentos[i].processar();
    }

    // Processamento de exclusões
    this.processarExclusoes();

    let animacao = this;
    // Chamando o proximo ciclo
    requestAnimationFrame(function() {
      // chamando a função em outro escopo
      animacao.proximoFrame();
    });

  },
  limparTela: function() {
    // atribuido o context a uma letiavel
    let contexto = this.contexto;

    // clearRect remove desenhos do canvas
    let x             = 0; // inicio - largura
    let y             = 0; // inicio - altura
    let larguraCanvas = contexto.canvas.width;  // fim - largura
    let alturaCanvas  = contexto.canvas.height; // fim - altura

    contexto.clearRect(x, y, larguraCanvas, alturaCanvas);
  },
  excluirSprite: function(sprite) {
    this.spritesExcluir.push(sprite);
  },
  excluirProcessamento: function(processamento) {
    this.processamentosExcluir.push(sprite);
  },
  processarExclusoes: function() {
    let novosSprites = [];
    let novosProcessamentos = [];

    // Adiciona somente se não estiver no array de excluidos
    for(let i in this.sprites) {
      if(this.spritesExcluir.indexOf(this.sprites[i]) == -1) {
        novosSprites.push(this.sprites[i]);
      }
    }

    for(let i in this.processamentos) {
      if(this.processamentosExcluir.indexOf(this.processamentos[i]) == -1)
        novosProcessamentos.push(this.processamentos[i]);

    // Limpar os arrays de exclusões
    this.spritesExcluir = [];
    this.processamentosExcluir = [];

    this.sprites = novosSprites;
    this.processamentos = novosProcessamentos;
    }
  }
}
