const mascaraDadosSensiveis = (dado) => {
  const ultimos = dado.slice(-4);
  return '*'.repeat(5) + '...' + ultimos;
}

export default mascaraDadosSensiveis;
