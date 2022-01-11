import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button `
        padding: 1.5em 3em;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        background: var(--clr-preto);
        color: white;
        border-radius: 1.25em; 
        border: none;
        margin: 1em 0;
        font-size: 1em;
        font-family: 'Readex Pro', sans-serif;
        cursor: pointer;

                &:hover {
                        background: var(--clr-cinza-800);
                }

        @media(max-width: 468px) {
                font-size: 0.75em;

        }
    
        ${props => props.azul && css`
        background: #00EAD5;
        `}
        
`

export const ButtonLink = styled(Link)`
        color: white;

`;

