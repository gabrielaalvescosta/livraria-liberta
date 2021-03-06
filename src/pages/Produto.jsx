import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { buscaLivroPeloId, buscaLivros } from '../services/livroApi';
import padronizaPreco from '../utils/padronizaPreco';

import Loading from '../components/Loading/Loading';
import { Main } from '../components/Main/styles';
import { Titulo, Barra } from '../components/Headings/styles';
import Carrossel from '../components/Carrossel/Carrossel';
import ButtonCompra from '../components/ButtonCompra/ButtonCompra';

import '../components/Livros/livros.scss';

function Produto() {
  const { idLivro } = useParams();  
  const [livro, setLivro] = useState({});
  const [livrosRelacionados, setLivrosRelacionados] = useState([]); 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleBuscaLivrosRelacionados = async (categoria) => {
      try {
        const dados = await buscaLivros({ categoria: categoria });
        setLivrosRelacionados(dados.livros);
      } catch (err) {
        console.log('Erro na requisição:', err.msg);
      }
    }
    const handleBuscaLivro = async () => {
      try {
        const dados = await buscaLivroPeloId(idLivro);
        const dadosLivro = await handleBuscaLivrosRelacionados(dados.livro.categoria);
        setLivro(dados.livro);
        setLivrosRelacionados(dadosLivro.livros);
      } catch (err) {
        console.log('Erro na requisição:', err.msg);
      } finally {
        setIsLoaded(true);
      }
    }
    handleBuscaLivro();
  }, [idLivro]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div className="body-produto">
      <section>
        <div className="imagem-cabecalho">
          <img src={livro.url_img} alt={`Capa do livro ${livro.titulo}`} />
        </div>
        <div className="apresentacao-do-livro">
          <section className="apresentacao-do-livro-partI">
            <div className="foto-do-livro">
              <img src={livro.url_img} alt={`Capa em tamanho maior do livro ${livro.titulo}`} />
            </div>
            <section>
              <h6>{livro.categoria}</h6>
              <h1>{livro.titulo}</h1>
              <h2>{padronizaPreco(livro.preco)}</h2>
              <ButtonCompra livro={livro} />
            </section>
          </section>
          <section className="informacoes-do-livro">
            <h2>Informações do livro</h2>
            <p>{livro.descricao}</p>
          </section>
        </div>
        <div className="ficha-tecnica-do-livro">
          <h2>Ficha técnica</h2>
          <div className="ficha-tecnica-do-livro-informacoes">
            <div>
              <h4>ISBN:</h4>
              <p>{livro.ISBN}</p>
            </div>
            <hr/>
            <div>
              <h4>Código de barras:</h4>
              <p>{livro.ISBN} - {livro.id_livro}</p>
            </div>
            <hr/>
            <div>
              <h4>Autor:</h4>
              <p>{livro.autor}</p>
            </div>
            <hr/>
            <div>
              <h4>Quantidade de Páginas:</h4>
              <p>{livro.paginas}</p>
            </div>
            <hr/>
            <div>
              <h4>Editora:</h4>
              <p>{livro.editora}</p>
            </div>
            <hr/>
            <div>
              <h4>Genero:</h4>
              <p>{livro.categoria}</p>
            </div>
          </div>
        </div>
      </section>
          
      <section className="parte-do-carrossel">
        <Main carroselMob>
          <Titulo>Quem comprou esse, também viu:</Titulo>
          <Barra />
          <Carrossel livros={livrosRelacionados} />
        </Main>
      </section>
    </div>
  );
}

export default Produto;
