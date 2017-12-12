
function Teste(cor, velocMaxima){
  this.cor = cor;
  this.velocMaxima = velocMaxima;
  this.velocAtual = 0;
}

// Protótipo com os métodos
Carro.prototype = {
  acelerar : function() {
    this.velocAtual += 10;
  }
}

// Inicio perna direita
contexto.beginPath();
contexto.moveTo(200, 250);
contexto.lineTo(205, 275);
contexto.lineTo(206, 295);
contexto.stroke()
// fim

// Inicio perna esquerda
contexto.beginPath();
contexto.moveTo(200, 250);
contexto.lineTo(195, 275);
contexto.lineTo(194, 295);
contexto.stroke();
// fim
