import React, { useState, useEffect } from 'react';

import { buscaLivros } from '../services/livroApi';

import Carrossel from '../components/Carrossel/Carrossel';
import Categorias from '../components/Categorias/Categorias';
import Slideshow from '../components/Slideshow/Slideshow';
import { Titulo, Barra } from '../components/Headings/styles';
import { Main } from '../components/Main/styles';
import Loading from '../components/Loading/Loading';

import literaturaJuvenil from '../assets/literatura-juvenil.jpg';
import slideShow from '../assets/slideshow.jpg';

const fotos = [ literaturaJuvenil, slideShow ];

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
    return <Loading />;
  }

  const maisVendidos = [...livros].sort((livro1, livro2) => {
    return livro1.titulo > livro2.titulo;
  });
  const livrosDestaques = [...livros].sort((livro1, livro2) => {
    return livro2.preco - livro1.preco;
  });
  const livrosPromocoes = [...livros].sort((livro1, livro2) => {
    return livro1.preco - livro2.preco;
  });

  return (
    <>
      <Slideshow imgs={fotos} />

      <Main>
        <Categorias /> 
      </Main>
      
      <Main carroselMob>
        <Titulo>Mais Vendidos</Titulo>
        <Barra />
        <Carrossel livros={maisVendidos} />

        <Titulo>Destaques</Titulo>
        <Barra />
        <Carrossel livros={livrosDestaques} />

        <Titulo>Promoções</Titulo>
        <Barra />
        <Carrossel livros={livrosPromocoes} />
      </Main>
    </>
  );
}

export default Home;
