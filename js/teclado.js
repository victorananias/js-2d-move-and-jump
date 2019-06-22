const SETA_ESQUERDA = 37;
const SETA_DIREITA = 39;
const ESPACO = 32;


class Teclado {
  
  constructor(elemento) {
    // Recebe o document
    this.elemento = elemento;

    // Array de teclas pressionadas
    this.pressionadas = [];
  
    // Array de teclas disparadas
    this.disparadas = [];
  
    // Funções de disparo
    this.funcoesDisparo = [];
    
    elemento.addEventListener("keydown", (evento) => {
      const tecla = evento.keyCode; // Tornando mais legível
      this.pressionadas[tecla] = true;
  
      // Dispara somente se for o primeiro clique da tecla
      // Caso a tecla seja mantida pressionada, execução interrompida
      if(this.funcoesDisparo[tecla] && !this.disparadas[tecla]) {
        this.disparadas[tecla] = true;
        // Executa a função assossiada no array
        this.funcoesDisparo[tecla]();
      }
    });
    
    // Define a tecla pressionada como true
  
    // Define a tecla pressionada como false
    elemento.addEventListener("keyup", (evento) => {
      let tecla = evento.keyCode; // Tornando mais legível
      this.pressionadas[tecla] = false;
      // Torna possível disparar novamente
      this.disparadas[tecla] = false;
    });
  }
  
  pressionada(tecla) {
    return this.pressionadas[tecla];
  }
  
  disparou(tecla, callback) {
    this.funcoesDisparo[tecla] = callback;
  }

}
