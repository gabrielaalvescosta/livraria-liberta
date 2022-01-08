import React, { useState, useEffect } from 'react';

import Carrossel from '../Carrossel/Carrossel';

import { buscaLivros } from '../services/livroApi';

function Home() {
  const [livros, setLivros] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleBuscaLivros = async () => {
      try {
        const dados = await buscaLivros();
        setLivros(dados.livros);
      } catch (err) {
        console.log('Erro na requisição:', err.message);
      } finally {
        setIsLoaded(true);
      }
    }
    handleBuscaLivros();
  }, []);
  
  if (!isLoaded) {
    // Aqui dá pra adicinar uma animação de carregando, e deixar por exemplo em todo container
    // como se fosse carregando, no caso dá pra fazer um componente só pra isso.
    return <h1>Carregando...</h1>;
  }

  return (
    <Carrossel livros={livros} />
  );
}

export default Home;
