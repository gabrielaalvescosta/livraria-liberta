import React from "react";

import { useDispatchCart } from "../Carrinho/Cart";

import { StyledButtonCompra } from "./styles";

function ButtonCompra({ livro }) {
  const dispatch = useDispatchCart();

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  const handleOnClick = () => {
    handleAddToCart(livro);
  };

  return (
    <StyledButtonCompra onClick={handleOnClick} title="Adicionar ao carrinho">
      Comprar
    </StyledButtonCompra>
  );
}

export default ButtonCompra;
