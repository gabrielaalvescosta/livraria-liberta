import React, { useState, useEffect } from 'react';
import Carrossel from '../components/Carrossel/Carrossel';
import Slideshow from '../components/Slideshow/Slideshow';
import { Titulo, Barra } from '../components/Headings/styles'
import { buscaLivros } from '../services/livroApi';
import { Main } from '../components/Main/styles';

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
    // Aqui dá pra adicinar uma animação de carregando, e deixar por exemplo em todo container
    // como se fosse carregando, no caso dá pra fazer um componente só pra isso.
    return <h1>Carregando...</h1>;
  }


  return (
    <div>
    <Slideshow imgs={fotos} />
    <Main>    
    <Titulo>Mais Vendidos</Titulo>
    <Barra/>
    <Carrossel livros={livros} />

    <Titulo>Destaques</Titulo>
    <Barra/>
    <Carrossel livros={livros} />

    <Titulo>Promoções</Titulo>
    <Barra/>
    <Carrossel livros={livros} />
    </Main>

    </div>
  );
}

export default Home;
