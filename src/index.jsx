import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './components/Carrinho/Cart';
import { PesquisaProvider } from './context/PesquisaContext';

import App from './App';

import './reset.scss';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <AuthProvider>
        <PesquisaProvider>
          <App />
        </PesquisaProvider>
        <ToastContainer />
      </AuthProvider>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
