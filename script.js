const visor = document.getElementById("tela");
const calculadora = document.getElementById('calc');

let ultimaTeclaOperador;

calculadora.addEventListener('click', (click) => {
  const btn = click.target.closest('li');

  if (btn) {
    const numero = btn.getAttribute('numero');
    const operador = btn.getAttribute('operador');
    const especial = btn.getAttribute('especial');

    // Captura a equação atual do visor para cálculo
    const equacao = visor.textContent;

    // Trata teclas especiais como '=', 'remover' e 'c'
    if (especial) {
      // Se '=' for pressionado, calcula a equação
      if (especial === '=') visor.textContent = eval(equacao);

      // Se 'remover' for pressionado, apaga o último caractere
      else if (especial === 'remover') visor.textContent = visor.textContent.slice(0, -1);

      // Se 'c' for pressionado, limpa o visor
      else if (especial === 'c') visor.textContent = '';

      return;
    }

    // Trata números e operadores
    else {
      // Bloqueia operadores consecutivos
      if (ultimaTeclaOperador && operador) return;

      // Adiciona número ou operador ao visor
      else visor.textContent += (numero ? numero : operador);
    };

    // Atualiza o estado da última tecla como operador ou não
    ultimaTeclaOperador = (operador ? true : false);
  };
});