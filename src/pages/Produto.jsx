import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardLivro from '../components/CardLivro/CardLivro';
import Loading from '../components/Loading/Loading';
import { buscaLivroPeloId, buscaLivros } from '../services/livroApi';
import Carrossel from '../components/Carrossel/Carrossel';
import '../components/Livros/livros.css'

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
          <img src={livro.url_img}/>
      </div>
      <div className="apresentacao-do-livro">
            <div className="foto-do-livro">
            <img src={livro.url_img}/>
            </div>
            <section>
            <h6>{livro.categoria}</h6>
            <h1>{livro.titulo}</h1>
            <h2>{livro.preco}</h2>
        </section>
        <section className="informacoes-do-livro">
              <h2>Informações do livro</h2>
              <p>{livro.descricao}</p>
        </section>
        </div>
            <div className="ficha-tecnica-do-livro">
                <h2>
                    Ficha técnica
                </h2>
                <div className="ficha-tecnica-do-livro-informacoes">
                  <div>
                    <h4>
                      ISBN:
                    </h4>
                    <p>{livro.ISBN}</p>
                  </div>
                  <hr/>
                  <div>
                    <h4>
                      Código de barras:
                    </h4>
                    <p>{livro.ISBN} - {livro.id_livro}</p>
                  </div>
                  <hr/>
                  <div>
                    <h4>
                      Autor:
                    </h4>
                    <p>{livro.autor}</p>
                  </div>
                  <hr/>
                  <div>
                    <h4>
                      Quantidade de Páginas:
                    </h4>
                    <p>{livro.paginas}</p>
                  </div>
                  <hr/>
                  <div>
                    <h4>
                      Editora:
                    </h4>
                    <p>{livro.editora}</p>
                  </div>
                  <hr/>
                  <div>
                    <h4>
                      Genero:
                    </h4>
                    <p>{livro.categoria}</p>
                  </div>
                </div>
              </div>
     </section>
      
        <section className="parte-do-carrossel">
            <h4 className="titulo-relacionados">
                Quem comprou esse, também viu:
            </h4>
            {console.log(livro, livrosRelacionados)}
            <Carrossel livros={livrosRelacionados} />
        </section>
   </div>
    
  )
}

export default Produto;