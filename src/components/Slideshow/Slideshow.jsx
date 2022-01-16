import React, { useState, useEffect } from 'react';

import useInterval from '../../context/hooks/useInterval';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './slideshow.scss';

function Slideshow({ imgs }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);
  
  const next = () => {
    if (index === imgs.length -1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const prev = () => {
    if(index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  useInterval(() => {
    next();
  }, 5000);

  return (
    <div className="slideshow">
      <div className="imagens">
        <img src={imgs[index]} alt="" />
      </div>

      <div className="acoes">
        <button onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        <button onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
