import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './components/Carrinho/Cart';

import App from './App';

import './reset.scss';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <AuthProvider>
        <App />
        <ToastContainer />
      </AuthProvider>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
