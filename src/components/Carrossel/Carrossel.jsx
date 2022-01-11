import React from 'react';

import CardLivro from '../CardLivro/CardLivro';

import { StyledCarrosel } from './styles';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 468, itemsToShow: 1},
  { width: 920, itemsToShow: 3 },
  { width: 1920, itemsToShow: 4 },
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
