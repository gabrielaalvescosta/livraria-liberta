import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './reset.scss';
import './index.scss';
import { CartProvider } from './components/Carrinho/Cart';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
    <App />

    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
