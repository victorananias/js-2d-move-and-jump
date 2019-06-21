function Spritesheet(contexto, imagem, linhas, colunas) {
  this.contexto = contexto;
  this.imagem = imagem;
  this.numLinhas = linhas;
  this.numColunas = colunas;
  this.intervalo = 0;
  this.linha = 0;
  this.coluna = 0;
}

Spritesheet.prototype = {
  proximoQuadro: function() {
    // Momento atual
    let agora = new Date().getTime();

    // Se não tem o ultimo tempo medido
    if(!this.ultimoTempo) {
      this.ultimoTempo = agora;
    }
    
    // Se é hora de mudar de coluna
    if(agora - this.ultimoTempo < this.intervalo) return;

    // Se a coluna não for a ultima
    if(this.coluna < this.numColunas - 1) {
      // passa para a próxima coluna
      this.coluna++;
    }
    // Se for a ultima
    else{
      // voltará para a primeira
      this.coluna = 0;
    }
  },
  desenhar: function(x, y) {
    let larguraQuadro = this.imagem.width / this.numColunas;
    let alturaQuadro = this.imagem.height / this.numLinhas;

    this.contexto.drawImage(
      this.imagem,
      larguraQuadro * this.coluna,
      alturaQuadro * this.linha,
      larguraQuadro,
      alturaQuadro,
      x,
      y,
      larguraQuadro,
      alturaQuadro
    );
  }
}
