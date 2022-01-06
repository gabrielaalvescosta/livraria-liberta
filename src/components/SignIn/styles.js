import styled from 'styled-components';

export const BoxLogin = styled.div `
    min-height: 60px;
    background: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 3.5em 3.5em; 

    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
  }

`

