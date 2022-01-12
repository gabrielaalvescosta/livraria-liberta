import React from 'react';

import loading from '../../assets/loading.svg';

import './loading.scss';

function Loading() {
  return (
    <div className="fade">
      <img src={loading} alt="Imagem de loading" />
    </div>
  );
}

export default Loading;
