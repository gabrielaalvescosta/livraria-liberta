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

export const Dados = styled.div `
    width: 50vw;
    margin: 0 auto;
    border-radius: 2em;
    padding: 3em;
    background: white;

            @media(max-width: 920px) {
              width: 90vw;
        }
`

export const FundoProfile = styled.div `
    width: 100%;
    background: #ddd;
    position: absolute;
    height: 120px;
    z-index: -5;
    margin: 0 auto;
`

export const Perfil = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 4em 0;
    width: 50vw;
    margin: 0px auto;

    @media(max-width: 920px) {
            flex-direction: column;
            text-align: center;
        }
    
`

export const FotoPerfil = styled.div `
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: white;
    position: relative;
    box-shadow: 9px 5px 20px 0px #e5e5e5;

`

export const DadosPerfil = styled.div `
    margin: 3em 2em;
    line-height: 1.40;
    position: relative;
    top: 25px;
    font-size: larger;

    @media(max-width: 920px) {
            flex-direction: column;
            text-align: center;
        }

`
export const TituloPerfil = styled.h2`
    font-size: 1em;
    font-weight: 400;
`

export const NomePerfil = styled.h3`
    margin: 2em;
    color: #434343;
`

export const TopoPerfil = styled.div`
    padding: 2em 1em;
    border-bottom: 3px solid #e3e3e3;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const LinhaPerfil = styled.div`
    padding: 1em 0;
    border-bottom: 1px solid #e3e3e3;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 920px) {
            flex-direction: column;
            text-align: center;
        }
`
export const ColunaPerfil = styled.div`
    padding: 1em;
    text-align: left;
    width: 50%;

    @media(max-width: 920px) {
              width: 100%;
        }
    
    
    ${props => props.titulo && css`
    font-weight: bold;
    color: #5a5a5a;
    `}

`

export const EditaPerfil = styled.button`
    padding: 1em;
    border-radius: 1em;
    background-color: #e5e5e5;
`

