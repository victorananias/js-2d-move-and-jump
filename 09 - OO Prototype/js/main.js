window.onload = function() {
  // Instanciando
  let meuCarro = new Carro('Vermelho',250);
  let oponente = new Carro('Azul',300);

  // chamando método
  meuCarro.acelerar();

  // Exibindo
  document.write(meuCarro.cor + ': ' + meuCarro.velocAtual);
  document.write ('<br>');
  document.write(oponente.cor + ': ' + oponente.velocAtual);
}
