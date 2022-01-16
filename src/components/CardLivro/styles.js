import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCardLivro = styled.figure`
  --clr-card: #ebebeb;
  --clr-preco: #00879b;
  --common-radius: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: none;
  padding: 1.875rem;
  margin: 2em 0;
  width: 16.25rem;
  text-align: center;
  box-shadow: 5px 5px 10px 0 var(--clr-card);
  background-color: var(--clr-branco);
  border-radius: var(--common-radius);

  img {
    display: block;
    width: 100%;
    height: 17.5rem;
    border-radius: var(--common-radius);
    object-fit: cover;
    border: 3px solid #e3e3e3;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 230px;

    h3 {
      display: -webkit-box;
      font-size: .9rem;
      -webkit-line-clamp: 2;
      line-height: 1.4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2rem;
    }

    .preco {
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.9;
      color: var(--clr-preco);
    }
  }
`;

export const StyledCardButton = styled(Link)`
  --clr-border: #d9d9d9;

  padding: 1.2em;
  width: 100%;
  font-size: .9rem;
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
