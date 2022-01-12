import React from 'react';

import padronizaPreco from '../../utils/padronizaPreco';

import ButtonCompra from '../ButtonCompra/ButtonCompra';

import { StyledCardLivro, StyledCardButton } from './styles';
import './card.scss';

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

        <ButtonCompra livro={livro} />
      </figcaption>
    </StyledCardLivro>
  );
}

export default CardLivro;
