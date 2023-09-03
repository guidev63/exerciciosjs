function converterParaReal() {
  const cotacaoDolar = parseFloat(document.getElementById("cotacaoDolar").value);
  const valorDolar = parseFloat(document.getElementById("valorDolar").value);

  if (isNaN(cotacaoDolar) || isNaN(valorDolar) || cotacaoDolar <= 0 || valorDolar < 0) {
      alert("Por favor, insira valores válidos.");
  } else {
      const valorReal = cotacaoDolar * valorDolar;
      document.getElementById("valorReal").textContent = valorReal.toFixed(2);
  }
}
