import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import CustomRoutes from './routes';

function App() {
  return (
    <>
      <Header/>
      <CustomRoutes />
      <Footer/>
    </>
  );
}

export default App;
