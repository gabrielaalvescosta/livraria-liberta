import React from 'react';

import { useDispatchCart } from '../Carrinho/Cart';

import '../CardLivro/card.scss';

function ButtonCompra({ livro }) {
  const dispatch = useDispatchCart();
  
  const addToCart = item => {
    dispatch({type: "ADD", item});
  }
  
  return (
    <button class="botao-comprar" onClick={() => addToCart(livro)}>
      Comprar
    </button>
  );
}
  
export default ButtonCompra;
