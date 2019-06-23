let SONIC_DIREITA = 1;
let SONIC_ESQUERDA = 2;

function Sonic(contexto, teclado, imagem) {
  this.contexto = contexto;
  this.teclado  = teclado;
  this.x = 0;
  this.y = 0;

  // Criando spritesheet a partir da imagem recebinda
  this.spritesheet = new Spritesheet(contexto, imagem, 3, 8);
  this.spritesheet.intervalo = 60;

  this.andando = false;
  this.direcao = SONIC_DIREITA;

  this.velocidade = 1;
}

Sonic.prototype = {
  atualizar: function() {
    if(this.teclado.pressionada(SETA_DIREITA)) {
      // Se já não estava nesse estado
      if (!this.andando || this.direcao != SONIC_DIREITA) {
        // Seleciona o primeiro quadro do spritesheet
        this.spritesheet.linha = 1;
        this.spritesheet.coluna = 0;

      }
      this.andando = true;
      this.direcao = SONIC_DIREITA
      this.spritesheet.proximoQuadro();
      this.x += this.velocidade;
    }

    else if(this.teclado.pressionada(SETA_ESQUERDA)) {
      if(!this.andando || this.direcao != SONIC_ESQUERDA) {
        this.spritesheet.linha = 2;
        this.spritesheet.coluna = 0;
      }
      this.andando = true;
      this.direcao = SONIC_ESQUERDA;
      this.spritesheet.proximoQuadro();
      this.x -= this.velocidade;
    }
    else {
      if(this.direcao == SONIC_DIREITA) {
        this.spritesheet.coluna = 0;
      }
      else if(this.direcao == SONIC_ESQUERDA) {
        this.spritesheet.coluna = 1
      }

      this.spritesheet.linha = 0;
      this.andando = false;
    }
  },
  desenhar: function() {
      this.spritesheet.desenhar(this.x, this.y);
  }
}
