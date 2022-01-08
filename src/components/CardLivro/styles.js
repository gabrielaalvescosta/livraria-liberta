import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCardLivro = styled.figure`
  --clr-card: #e2e2e2;
  --clr-preco: #00879b;
  --common-radius: 2rem;
  --common-border: 1px solid var(--clr-card);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  width: 17.5rem; // 280px
  text-align: center;
  box-shadow: 5px 5px 10px 0 var(--clr-card);
  border: var(--common-border);
  border-radius: var(--common-radius);

  img {
    display: block;
    max-width: 100%;
    height: 17.5rem;
    border-radius: var(--common-radius);
    border: var(--common-border);
  }

  figcaption {
    width: 100%;

    h3 {
      display: -webkit-box;
      margin-top: 2.5em;
      font-size: .9rem;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .preco {
      margin-top: 1.5em;
      font-weight: 600;
      font-size: 1.125rem;
      color: var(--clr-preco);
    }
  }
`;

export const StyledCardButton = styled(Link)`
  --clr-border: #d9d9d9;

  padding: 1.2em;
  margin-top: 1.3em;
  width: 100%;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--clr-cinza-800);
  border-radius: 1.25em;
  border: 3px solid var(--clr-border);
  transition: 250ms;

  &:focus,
  &:hover {
    color: var(--clr-branco);
    background-color: var(--clr-preto);
    border-color: var(--clr-preto);
  }
`;
