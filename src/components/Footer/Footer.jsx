import React from 'react';
import './footer.scss'

export default function Footer() {
 
    return (
      <section className="body-footera">
                <section className="pagamento-seguranca">
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
                    <section className="seguranca">
                        <h4>
                            Site seguro
                        </h4>
                        <div className="selos-do-site">
                            <div className="verificacao-do-site">
                                <img src={"image/ebit.png"} alt="imagem do selo ebit"/>
                                <img src={"image/selo-premio-ebit.png"} alt="imagem do selo do premio ebit"/>
                                <div className="verificacao-do-site-II">
                                    <img src={"image/verified-by-visa.png"} alt="imagem de verificação pela visa"/>
                                    <img src={"image/selo-ssl_site_seguro.png"} alt="imagem do selo de segurança do site"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="navbar-footer">
                    <nav>
                        <img src={"image/logo.png"} alt="imagem do logo da livraria liberta"/>
                        <ul>
                            {Array.of("Home", "Quem somos", "sac", "política de privacidade", "termos de uso").map((aba)=>{
                                return(
                                    <li>
                                        {aba}
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </nav>
                </section>
                <section className="rodape">
                    <div className="informacoes-juridicas-e-redes">
                        <article className="informacoes-juridicas">
                            <p>
                                Liberta 2022 - Projeto criado para fins didáticos -
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