import { Route, Routes } from 'react-router-dom';

// Páginas
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
