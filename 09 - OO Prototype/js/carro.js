
//Construtor
function Carro(cor, velocMaxima){
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
