import styled from 'styled-components';

export const Container = styled.div `
    min-height: 60px;
    background: var(--clr-azul-450);
    display: flex;
    justify-content: center;
`

export const Wrapper = styled.div `
    padding: 5px;
    display: flex;
    width: 75vw;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        width:100vw;
        padding: 0px 15px 0px 10px;

        a.link-cadastre {
                display:none;
        }

      }
`

// Columns
export const Left = styled.div `
    flex: 1;

    @media(max-width: 768px) {
        width: 80px;

      }
`
export const Center = styled.div `
    flex: 3;
  
`
export const Botoes = styled.div `
    flex: 1;
    display: flex;
    justify-content: space-around;

`