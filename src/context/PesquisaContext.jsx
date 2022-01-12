import React, { createContext, useState } from 'react';

const PesquisaContext = createContext();

function PesquisaProvider({ children }) {
  const [pesquisa, setPesquisa] = useState('');

  const handlePesquisa = (event) => {
    setPesquisa(event.target.value);
  }

  return (
    <PesquisaContext.Provider value={{ pesquisa, handlePesquisa }}>
      {children}
    </PesquisaContext.Provider>
  );
}

export { PesquisaContext, PesquisaProvider };
