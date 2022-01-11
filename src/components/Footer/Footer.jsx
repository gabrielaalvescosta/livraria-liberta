import React from 'react';
import './footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcAmex, faCcMastercard, faCcPaypal, faCcAmazonPay, faCcStripe, faCcDinersClub, faCcDiscover, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Logo  from '../../assets/Logo';

export default function Footer() {
 
    return (
      <section className="body-footera">
                <section className="pagamento-seguranca">
                    <section className="pagamento">
                        <h4>
                            Pagamento
                        </h4>
                        <div className="bandeira-cartoes">
                        <FontAwesomeIcon icon={faCcVisa} className="fa-user" />
                        <FontAwesomeIcon icon={faCcAmex} className="fa-user" />
                        <FontAwesomeIcon icon={faCcMastercard} className="fa-user" />
                        <FontAwesomeIcon icon={faCcPaypal} className="fa-user" />
                        <FontAwesomeIcon icon={faCcAmazonPay} className="fa-user" />
                        <FontAwesomeIcon icon={faCcStripe} className="fa-user" />
                        <FontAwesomeIcon icon={faCcDinersClub} className="fa-user" />
                        <FontAwesomeIcon icon={faCcDiscover} className="fa-user" />
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
                        <div className='logotipo-rodape'><Logo/></div>
                        
                        <ul>
                            {Array.of("Home", "Quem somos", "sac", "política de privacidade", "termos de uso").map((aba)=> {
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
                        <FontAwesomeIcon icon={faInstagram} className="fa-user" />
                        <FontAwesomeIcon icon={faFacebook} className="fa-user" />
                        <FontAwesomeIcon icon={faTwitter} className="fa-user" />
                        </div>
                    </div>
                </section>
      </section>
    )
}