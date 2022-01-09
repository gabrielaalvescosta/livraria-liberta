import React, { useState, useEffect } from 'react';
import Carrossel from '../Carrossel/Carrossel';
import Slideshow from '../components/Slideshow/Slideshow';
import { Titulo, Barra } from '../components/Headings/styles'
import { buscaLivros } from '../services/livroApi';

const fotos = [
  'https://raw.githubusercontent.com/gabrielaalvescosta/livraria-liberta/slideshow/src/assets/slideshow.jpg',
  'https://raw.githubusercontent.com/gabrielaalvescosta/livraria-liberta/cart/src/assets/literatura-juvenil.jpg'
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
