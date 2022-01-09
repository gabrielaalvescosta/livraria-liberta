import React from 'react';

import CardLivro from '../CardLivro/CardLivro';

import { StyledCarrosel } from './styles';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

function Carrosel({ livros }) {
  const listCards = livros.map(livro => 
    <CardLivro key={livro.id_livro.toString()} livro={livro} />
  );
  
  return (
    <StyledCarrosel
      pagination={false}
      breakPoints={breakPoints}
    >
      {listCards}
    </StyledCarrosel>
  );
}

export default Carrosel;
