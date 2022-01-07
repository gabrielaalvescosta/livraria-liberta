import { Route, Routes } from 'react-router-dom';

// Páginas
import Home from './pages/Home';
import Header from './components/Header/Header';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';
import Produto from './pages/Produto';
import Pesquisa from './pages/Pesquisa';
import Dashboard from './pages/Dashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/produto" element={<Produto/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/pesquisa" element={<Pesquisa/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
      </Routes>
    </div>
  );
}

export default App;
