import styled, { css } from "styled-components";

export const Input = styled.input`
  -webkit-appearance: none !important;
  border-radius: 1em;
  padding: 1em 2em;
  border: 2px solid #ddd;
  background: white;
  width: 100%;
  font: inherit;
  margin: 0 0 0.75em 0;

  @media (max-width: 468px) {
    font-size: 0.75em;
    -webkit-appearance: none;
  }

  ${(props) =>
    props.metade && css`
      width: 49%;
    `}
`;

export const LabelInput = styled.div`
  margin: 1em 0;
  color: var(--clr-cinza-800);
  font-weight: bold;
`;
