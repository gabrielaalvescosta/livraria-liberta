import styled from "styled-components";

export const StyledButtonCompra = styled.button`
  --clr-border: #d9d9d9;
  
  padding: 1em;
  width: 100%;
  font-size: .9rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--clr-cinza-800);
  border-radius: 1em;
  border: 3px solid var(--clr-border);
  transition: 250ms;

  &:focus,
  &:hover {
    color: #00879b;
    background-color: var(--clr-btn);
    border-color: var(--clr-btn);
  }
`;
