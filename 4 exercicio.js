// Função para calcular a idade em dias
function calcularIdadeEmDias(anos, meses, dias) {
    const diasPorAno = 365;
    const diasPorMes = 30;
    
    // Calcula a idade em dias
    const idadeEmDias = (anos * diasPorAno) + (meses * diasPorMes) + dias;
    
    return idadeEmDias;
  }
  
  // Leitura da idade em anos, meses e dias
  const anos = parseInt(prompt("Digite a idade em anos:"));
  const meses = parseInt(prompt("Digite a idade em meses:"));
  const dias = parseInt(prompt("Digite a idade em dias:"));
  
  // Chama a função para calcular a idade em dias
  const idadeEmDias = calcularIdadeEmDias(anos, meses, dias);
  
  // Exibe o resultado
  console.log(`A idade em dias é: ${idadeEmDias} dias`);
  