import React from 'react';

import padronizaPreco from '../../utils/padronizaPreco';

import { StyledCardLivro, StyledCardButton } from './styles';
import { useDispatchCart } from '../Carrinho/Cart';

function CardLivro({ livro }) {
  const dispatch = useDispatchCart();
  
  const addToCart = item => {
      dispatch({type: "ADD", item});
  }
  
  return (
    <StyledCardLivro>
      <img src={livro.url_img} alt={`Capa do livro ${livro.titulo}`} />
      <figcaption>
        <h3 title={livro.titulo}>
          {livro.titulo}
        </h3>
        <p className="preco">{padronizaPreco(livro.preco)}</p>
        <StyledCardButton to={`/produto/${livro.id_livro}`}>
          Saiba mais
        </StyledCardButton>

        {/* BOTAO DE TESTE PARA O CARRINHO ABAIXO */}
        <button onClick={() => addToCart(livro)}>
          Comprar
        </button>
      </figcaption>
    </StyledCardLivro>
  );
}

export default CardLivro;
