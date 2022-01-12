import styled from 'styled-components';

export const CardsCategorias = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2em 0;
`

export const Categoria = styled.div `
    width: 150px;
    height: 150px;
    background: #fff;
    font-size: 1em;
    display: flex;
    border-radius: 1em;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 3em 1em 2em 1em;
    box-shadow: 5px 5px 10px 0 #ebebeb;

    @media(max-width: 920px) {
                font-size: 0.75em;
                margin: 2em 1em;
                height: auto;
                width: 100px;
                padding: 1em;
               
        }
`
