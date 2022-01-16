import styled from "styled-components";

export const CardsCategorias = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2em 0;
`;

export const Categoria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 3em 1em 2em 1em;
  width: 150px;
  height: 150px;
  background-color: var(--clr-branco);
  font-size: 1em;
  border-radius: 1em;
  text-align: center;
  box-shadow: 5px 5px 10px 0 #ebebeb;

  @media (max-width: 920px) {
    font-size: .75em;
    margin: 2em 1em;
    height: auto;
    width: 100px;
    padding: 1em;
  }
`;
