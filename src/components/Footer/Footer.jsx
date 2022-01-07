import React from 'react';
import './footer.scss'

export default function Footer() {
 
    return (
      <section className="body-footera">
                <section className="pagamento">
                    <h4>
                        Pagamento
                    </h4>
                    <div className="bandeira-cartoes">
                        <img src={"image/logo-visa.png"} alt="logo da bandeira do cartão visa"/>
                        <img src={"image/mastercard.png"} alt="logo da bandeira do cartão mastercard"/>
                        <img src={"image/elo.png"} alt="logo da bandeira do cartão elo"/>
                        <img src={"image/cartao-hiper.png"} alt="logo da bandeira do cartão hiper"/>
                        <img src={"image/hipercard.png"} alt="logo da bandeira do cartão hipercard"/>
                        <img src={"image/paypal.png"} alt="logo da bandeira paypal"/>
                    </div>
                </section>
                <section className="pagamento">
                    <h4>
                        Site seguro
                    </h4>
                    <div className="selos-do-site">
                        <div className="verificacao-do-site">

                        </div>
                    </div>
                </section>
                <section className="rodape">
                    <div className="informacoes-juridicas-e-redes">
                        <article className="informacoes-juridicas">
                            <p>
                                Liberta 2022 - Projeto criad para fins didáticos -
                            </p>
                            <p>
                                Todos os direitos reservados
                            </p>
                        </article>
                        <div className="informacoes-de-redes">

                        </div>
                    </div>
                </section>
            </section>
    )
}