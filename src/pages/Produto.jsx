import React from 'react'
import Livros from '../components/Livros/Livros'

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
    <div>
      <Livros/>
    </div>
  )
}

export default Produto;
