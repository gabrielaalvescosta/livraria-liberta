import React, {useState, useEffect} from 'react';
import './livros.scss'

export default function Livros(){

    return (
        <section className="body-produtos">
        <section className="apresentacao-do-livro">
            <div className="foto-do-livro">
            {livros.map(
                (livro,id) => 
                    <div key={id} livro={livro}> 
                    <p>{livro.titulo}</p>
                    </div>
            )}
            </div>
            <div>
                <article className="titulo-e-preco">

                </article>
                <button className="btao-de-compra">
                    Adicionar ao carrinho
                </button>
            </div>
        </section>
        <section className="informacoes-do-livro">
            <h2>Informações do livro</h2>
            <div className="sinopse-do-livro">

            </div>
            <div className="ficha-tecnica-do-livro">
                <h2>
                    Ficha técnica
                </h2>
                <div className="ficha-tecnica-do-livro-informacoes">
                <h4>
                    Código:
                </h4>
                <h4>
                    Código de barras:
                </h4>
                <h4>
                    Autor:
                </h4>
                <h4>
                    Fabricante:
                </h4>
                <h4>
                    Editora:
                </h4>
                <h4>
                    ISBN 10:
                </h4>
                <h4>
                    ISBN 13:
                </h4>
                </div>
                
            </div>
        </section>
        <section className="parte-do-carrossel">
            <h4 className="titulo-relacionados">
                Relacionados
            </h4>
        </section>
    </section>
    )
}