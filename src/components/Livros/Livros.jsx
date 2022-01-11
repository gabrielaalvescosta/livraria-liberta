import React from 'react';
import Loading from '../Loading/Loading'
import Carrossel from '../Carrossel/Carrossel'

export default function Livros(){
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
        <section className="body-produtos">
        <section className="apresentacao-do-livro">
            <div className="foto-do-livro">
                <h1>{livro.titulo}</h1>
            </div>
            <div>
                <article className="titulo-e-preco">

                </article>
                <button className="btao-de-compra">
                    Adicionar ao carrinho
                </button>
            </div>
        </section>
        <section className="informacoes-do-livro">
            <h2>Informações do livro</h2>
            <div className="sinopse-do-livro">

            </div>
            <div className="ficha-tecnica-do-livro">
                <h2>
                    Ficha técnica
                </h2>
                <div className="ficha-tecnica-do-livro-informacoes">
                <h4>
                    Código:
                </h4>
                <h4>
                    Código de barras:
                </h4>
                <h4>
                    Autor:
                </h4>
                <h4>
                    Fabricante:
                </h4>
                <h4>
                    Editora:
                </h4>
                <h4>
                    ISBN 10:
                </h4>
                <h4>
                    ISBN 13:
                </h4>
                </div>
                
            </div>
        </section>
        <section className="parte-do-carrossel">
            <h4 className="titulo-relacionados">
                Relacionados
            </h4>
                <Carrossel />
        </section>
    </section>
    )
}