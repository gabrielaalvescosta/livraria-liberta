import styled from "styled-components";

export const BoxLogin = styled.div`
  min-height: 60px;
  background: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5em 3.5em;
  margin: 3em auto;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;

export const BoxCadastro = styled.div`
  background: white;
  padding: 3em;
  width: 50%;
  margin: 3em auto;
  border-radius: 2em;

  @media(max-width: 1100px) {
    width: 100%;
    padding: 2em;
    font-size: 0.8em;
`;
