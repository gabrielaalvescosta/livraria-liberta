import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  padding: 1.5em 3em;
  margin: 1em 0;
  width: 100%;
  background-color: var(--clr-preto);
  color: var(--clr-branco);
  font-size: 1em;
  text-align: center;
  text-transform: uppercase;
  border-radius: 1.25em;
  transition: 250ms;

  // Events
  &:focus,
  &:hover {
    background: var(--clr-cinza-800);
  }

  // Props
  ${props => props.azul && css`
      background-color: var(--clr-btn);
    `}
  ${props => props.vermelho && css`
      background-color: #cf000f;
    `}

  // Responsive
  @media (max-width: 29.25em) {
    font-size: .75em;
  }
`;

export const ButtonLink = styled(Link)`
  color: var(--clr-branco);
`;
