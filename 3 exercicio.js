// Função para calcular a comissão do vendedor
function calcularComissao(identificacaoVendedor, codigoPeca, precoUnitario, quantidadeVendida) {
    const taxaComissao = 0.05; // Taxa de comissão de 5%
    const totalVenda = precoUnitario * quantidadeVendida;
    const comissao = totalVenda * taxaComissao;
  
    console.log(`Identificação do Vendedor: ${identificacaoVendedor}`);
    console.log(`Código da Peça: ${codigoPeca}`);
    console.log(`Preço Unitário da Peça: R$ ${precoUnitario.toFixed(2)}`);
    console.log(`Quantidade Vendida: ${quantidadeVendida}`);
    console.log(`Total da Venda: R$ ${totalVenda.toFixed(2)}`);
    console.log(`Comissão do Vendedor: R$ ${comissao.toFixed(2)}`);
  }
  
  // Exemplo de uso da função
  const identificacaoVendedor = "V001";
  const codigoPeca = "P001";
  const precoUnitario = 10.0;
  const quantidadeVendida = 20;
  
  calcularComissao(identificacaoVendedor, codigoPeca, precoUnitario, quantidadeVendida);
  