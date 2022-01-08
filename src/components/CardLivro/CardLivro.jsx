import React from 'react';

import padronizaPreco from '../../utils/padronizaPreco';

import { StyledCardLivro, StyledCardButton } from './styles';

function CardLivro({ livro }) {
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
      </figcaption>
    </StyledCardLivro>
  );
}

export default CardLivro;
