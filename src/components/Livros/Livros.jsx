import React from 'react';
import './livros.scss'

export default function Livros() {
 
    return (
        <section className="body-footera">
        <section className="apresentacao-do-livro">
            <div className="foto-do-livro">

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
            <div className="sinopse-do-livro">

            </div>
            <div className="ficha-tecnica-do-livro">
                
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