let SETA_ESQUERDA = 37;
let SETA_DIREITA = 39;
let SETA_ACIMA = 38;
let SETA_ABAIXO = 40;
let ESPACO = 32;


function Teclado(elemento) {
  // Recebe o document
  this.elemento = elemento;

  // Array de teclas pressionadas
  this.pressionadas = [];

  // Array de teclas disparadas
  this.disparadas = [];

  // Funções de disparo
  this.funcoesDisparo = [];

  // Registrando teclas no Array
  let teclado = this;

  // Define a tecla pressionada como true
  elemento.addEventListener("keydown", function(evento) {
    let tecla = evento.keyCode; // Tornando mais legível
    teclado.pressionadas[tecla] = true;

    // Dispara somente se for o primeiro clique da tecla
    // Caso a tecla seja mantida pressionada, execução interrompida
    if(teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]) {
      teclado.disparadas[tecla] = true;
      // Executa a função assossiada no array
      teclado.funcoesDisparo[tecla] ();
    }
  });

  // Define a tecla pressionada como false
  elemento.addEventListener("keyup", function(evento) {
    let tecla = evento.keyCode; // Tornando mais legível
    teclado.pressionadas[tecla] = false;
    // Torna possível disparar novamente
    teclado.disparadas[tecla] = false;
  });
}


Teclado.prototype = {
  pressionada: function(tecla) {
    return this.pressionadas[tecla];
  },
  disparou: function(tecla, callback) {
    this.funcoesDisparo[tecla] = callback;
  }
}
