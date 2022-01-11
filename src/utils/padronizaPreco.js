const padronizaPreco = preco => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(preco);
}

export default padronizaPreco;
