import React from 'react';

import { consts } from 'react-elastic-carousel';

import CardLivro from '../CardLivro/CardLivro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledCarrosel } from './styles';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 468, itemsToShow: 3 },
  { width: 920, itemsToShow: 3 },
  { width: 1920, itemsToShow: 4 },
];

function Carrosel({ livros }) {
  const listCards = livros.map(livro => 
    <CardLivro key={livro.id_livro.toString()} livro={livro} />
  );

  const myArrow = ({ type, onClick, isEdge }) => {
    return (
      <button className="rec rec-arrow rec rec-arrow-right" onClick={onClick} disabled={isEdge}>
        {type === consts.PREV ? (
          <FontAwesomeIcon icon={faChevronLeft} />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} />
        )}
      </button>
    );
  };
  
  return (
    <StyledCarrosel
      pagination={false}
      breakPoints={breakPoints}
      renderArrow={myArrow}
    >
      {listCards}
    </StyledCarrosel>
  );
}

export default Carrosel;
