import styled, { css } from 'styled-components';

export const Button = styled.button `
        padding: 1.5em 3em;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        background: black;
        color: white;
        border-radius: 1.25em; 
        border: none;
        margin: 1em 0;
        font-size: 1em;
        font-family: 'Readex Pro', sans-serif;

    
        ${props => props.azul && css`
        background: #00EAD5;
        `}
        
`
