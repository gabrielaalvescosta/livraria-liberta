import React, { useState, useEffect } from 'react';
import Carrossel from '../Carrossel/Carrossel';
import Slideshow from '../components/Slideshow/Slideshow';
import { Titulo, Barra } from '../components/Headings/styles'
import { buscaLivros } from '../services/livroApi';

const fotos = [
  'https://raw.githubusercontent.com/gabrielaalvescosta/livraria-liberta/slideshow/src/assets/slideshow.jpg',
  'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500'
];

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
    <Titulo>Mais Vendidos</Titulo>
    <Barra/>
    <Carrossel livros={livros} />

    <Titulo>Destaques</Titulo>
    <Barra/>
    <Carrossel livros={livros} />

    <Titulo>Promoções</Titulo>
    <Barra/>
    <Carrossel livros={livros} />
    </div>
  );
}

export default Home;
