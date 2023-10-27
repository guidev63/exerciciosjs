function validarFahrenheit() {
    let fahrenheit = document.getElementById("fahrenheit").value;

    if (fahrenheit == "") {
      alert("Por favor, insira uma temperatura em graus Fahrenheit.");
      return false;
    }

    return true;
  }

  if (!validarFahrenheit()) {
    return;
  }

  // Chamada da função de conversão de temperatura
  converterTemperatura();

  // Atualiza o conteúdo do elemento #resultado com o resultado da conversão
  function atualizarResultado() {
    let celsius = converterTemperatura();
    document.getElementById("resultado").innerHTML = "A temperatura em graus Celsius é: " + celsius;
  }

  // Chama a função atualizarResultado após a conversão
  window.onload = atualizarResultado;