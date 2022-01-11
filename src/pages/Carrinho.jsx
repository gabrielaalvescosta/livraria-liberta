import React from 'react'
import Cart from '../components/Carrinho/Cart';
import { Main } from '../components/Main/styles';
import { useCart, useDispatchCart } from '../components/Carrinho/Cart';
import { Subtitulo, Barra } from '../components/Headings/styles';
import { StyledCardButton } from '../components/CardLivro/styles';
import padronizaPreco from '../utils/padronizaPreco';

import '../components/Carrinho/cart.scss';

const CartItem = ({ livro, index, handleRemove }) => {
  return (
    <article>
      <div href="#0" className="item-carrinho">
        <div>
          <img src={livro.url_img} alt={livro.titulo} className="imagem-item" />
        </div>
        <div className="item-descricao">
          <h2>{livro.titulo}</h2>
          <h3 className="f6 fw4 mt2 mb0 black-60">{livro.autor}</h3>
        </div>

        <div className="preco-carrinho">
            <p className="preco">{padronizaPreco(livro.preco)}</p>
          </div>

          <div className="acoes-carrinho">
          <button onClick={() => handleRemove(index)}>x</button>
          </div>
      </div>

    </article>
  );
};

function Carrinho() {

  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + b.preco, 0);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if(items.length === 0) {
    return <Main>
      <div className="carrinho-container">
      <Subtitulo>Carrinho</Subtitulo>
      <Barra left/>
      <p className="vazio">Seu carrinho ainda está vazio.</p>
      </div>
    </Main>
  }

  return (
    <Main>
      <div className="carrinho-container">

      <Cart/>

      {items.map((item, index) => (
        <CartItem
          handleRemove={handleRemove}
          key={index}
          livro={item}
          index={index}
        />
      ))}

      <p className="total"> Total: {" "}
                {totalPrice.toLocaleString("pt", {
                  style: "currency",
                  currency: "BRL",
                })}
                    </p>

                    <div className="acoes-carrinho">
      <StyledCardButton to={`/produtos`}>Continuar comprando</StyledCardButton>
      <StyledCardButton to={`/checkout`}>Concluir compra</StyledCardButton>
      </div>
                </div>

    </Main>
    
  )
}

export default Carrinho;
