function Animacao(contexto) {
  this.contexto = contexto;
  this.sprites = []; // os sprites são objetos
  this.ligado = false;
}

Animacao.prototype = {
  novoSprite: function(sprite) {
    this.sprites.push(sprite);
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

    // A cada ciclo, a tela é limpa
    // Sprites removidos e novos adicionados
    this.limparTela();

    // esse 'for' percorre somente os elementos definidos do array,
    // utilizando a propriedade length o 'for' irá percorrer todas as posições
    // Atualizando o estado dos Sprites
    for (let i in this.sprites)
      this.sprites[i].atualizar();

    // Desenhando os Sprites
    for(let i in this.sprites)
      this.sprites[i].desenhar();

    // referenciando o objeto
    var animacao = this;

    // Chamando o proximo ciclo
    requestAnimationFrame(function() {
      // chamando a função em outro escopo
      animacao.proximoFrame();
    });

  },
  limparTela: function() {
    // atribuido o context a uma variavel
    var contexto = this.contexto;

    // clearRect remove desenhos do canvas
    let x             = 0; // inicio - largura
    let y             = 0; // inicio - altura
    let larguraCanvas = contexto.canvas.width;  // fim - largura
    let alturaCanvas  = contexto.canvas.height; // fim - altura

    contexto.clearRect(x, y, larguraCanvas, alturaCanvas);
  }
}
