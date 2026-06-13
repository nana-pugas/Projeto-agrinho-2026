let valor = 0;

const contador = setInterval(() => {
  valor++;

  document.getElementById("numero").textContent = valor;

  if (valor >= 100) {
    clearInterval(contador);
  }
}, 30);
