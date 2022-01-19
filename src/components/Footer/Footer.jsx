import React from "react";

import Logo from "../../assets/Logo";

import ebitImg from "../../assets/ebit.png";
import premioEbitImg from "../../assets/selo-premio-ebit.png";
import sslSiteSeguroImg from "../../assets/selo-ssl-site-seguro.png";
import visaImg from "../../assets/verified-by-visa.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcAmex,
  faCcMastercard,
  faCcPaypal,
  faCcAmazonPay,
  faCcStripe,
  faCcDinersClub,
  faCcDiscover,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";

function Footer() {
  return (
    <section className="body-footera">
      <section className="pagamento-seguranca">
        <section className="pagamento">
          <h4>Pagamento</h4>
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
          <h4>Site seguro</h4>
          <div className="selos-do-site">
            <div className="verificacao-do-site">
              <img src={ebitImg} alt="Imagem do selo ebit" />
              <img src={premioEbitImg} alt="Imagem do selo do premio ebit" />
              <div className="verificacao-do-site-II">
                <img
                  src={sslSiteSeguroImg}
                  alt="imagem de verificação pela visa"
                />
                <img src={visaImg} alt="imagem do selo de segurança do site" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="navbar-footer">
        <nav>
          <div className="logotipo-rodape">
            <Logo />
          </div>

          <ul>
            {['Home', 'Quem somos', 'Sac', 'Política de privacidade', 'Termos de uso'].map(
              (aba, index) => {
                return <li key={index}>{aba}</li>;
            })}
          </ul>
        </nav>
      </section>
      <section className="rodape">
        <div className="informacoes-juridicas-e-redes">
          <article className="informacoes-juridicas">
            <p>
              Liberta 2022 - Projeto criado para fins didáticos - Todos os
              direitos reservados
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
  );
}

export default Footer;
