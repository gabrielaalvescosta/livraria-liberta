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
  justify-content: center;
  flex: none;
  padding: 1.875rem;
  margin: 0 1rem;
  width: 16.25rem;
  text-align: center;
  box-shadow: 5px 5px 10px 0 var(--clr-card);
  border: var(--common-border);
  border-radius: var(--common-radius);

  img {
    display: block;
    width: 100%;
    height: 17.5rem;
    border-radius: var(--common-radius);
    border: var(--common-border);
  }

  figcaption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 200px;

    h3 {
      display: -webkit-box;
      font-size: .9rem;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2rem;
    }

    .preco {
      font-weight: 600;
      font-size: 1.125rem;
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
