import React from 'react'
import Cart from '../components/Carrinho/Cart';
import { Main } from '../components/Main/styles';
import { useCart, useDispatchCart } from '../components/Carrinho/Cart';
import { Subtitulo, Barra } from '../components/Headings/styles';
import { StyledCardLivro, StyledCardButton } from '../components/CardLivro/styles';
import padronizaPreco from '../utils/padronizaPreco';

import '../components/Carrinho/cart.scss';

const CartItem = ({ livro, index, handleRemove }) => {
  return (
    <article>
      <div href="#0">
        <div>
          <img src={livro.url_img} className="db w-100" />
        </div>
        <div className="dtc v-top pl2">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">{livro.titulo}</h1>
          <h2 className="f6 fw4 mt2 mb0 black-60">{livro.autor}</h2>
          <dl className="mt2 f6">
            <dt className="clip">Preço</dt>
            <p className="preco">{padronizaPreco(livro.preco)}</p>
          </dl>
          <button onClick={() => handleRemove(index)}>Remove from cart</button>
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
      <StyledCardButton to={`/produtos/todos`}>Continuar comprando</StyledCardButton>
      <StyledCardButton to={`/checkout`}>Concluir compra</StyledCardButton>
      </div>
                </div>

    </Main>
    
  )
}

export default Carrinho;
