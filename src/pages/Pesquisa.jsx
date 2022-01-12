import React, { useContext, useEffect, useState } from 'react'

import { buscaLivros } from '../services/livroApi';

import { PesquisaContext } from '../context/PesquisaContext';

import Loading from '../components/Loading/Loading';

function Pesquisa() {
  const { pesquisa } = useContext(PesquisaContext);
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
    return <Loading />;
  }

  // Livros filtrados pela pesquisa.
  const livrosFiltrados = livros.filter(livro => {
    const regex = new RegExp(pesquisa, 'i');
    return pesquisa && regex.test(livro.titulo);
  });

  return (
    <div>
      {console.log(livrosFiltrados)}
    </div>
  );
}

export default Pesquisa;
