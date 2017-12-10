var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;

function Teclado(elemento) {
  this.elemento = elemento;

  // Array de teclas pressionadas
  this.pressionadas = [];

  // Registrando teclas no Array
  var teclado = this;

  // Se alguma tecla for pressionada, será adicionada no array com o valor true
  elemento.addEventListener("keydown", function(evento) {
    teclado.pressionadas[evento.keyCode] = true;
  });

  elemento.addEventListener("keyup", function(evento) {
    teclado.pressionadas[evento.keyCode] = false;
  });
}

Teclado.prototype = {
  pressionada: function(tecla) {
    return this.pressionadas[tecla];
  }
}
