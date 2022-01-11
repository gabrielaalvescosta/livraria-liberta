import styled, { css } from 'styled-components';

export const Main = styled.div `
    width: 75vw;
    margin: 0 auto;
  
    ${props => props.carroselMob && css`
    
        @media(max-width: 468px) {
              width: 100vw;
        }
    `}
  

`