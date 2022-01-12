import React, { useContext, useEffect, useState } from 'react'

import { buscaLivros } from '../services/livroApi';

import { PesquisaContext } from '../context/PesquisaContext';

import Loading from '../components/Loading/Loading';

import CardLivro from '../components/CardLivro/CardLivro';

import '../components/Livros/livros.scss'

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
      <section className='body-pesquisa'>
      <ul className='lista-de-livros'>
          {livrosFiltrados.map((livro)=>{
            return(
              <li className='lista-de-itens'>
                <CardLivro livro={livro}/>
              </li>
            )
          }
          )}
        </ul>
      </section>
    </div>
  );
}

export default Pesquisa;
