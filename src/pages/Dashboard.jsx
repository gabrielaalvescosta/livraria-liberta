import React, { useState, useEffect } from 'react';

import { buscaUsuarioPeloId } from '../services/usuarioApi';

function Dashboard() {
  const [usuario, setUsuario] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleBuscaUsuario = async () => {
      try {
        const idUsuario = localStorage.getItem('idUsuario');
        const dados = await buscaUsuarioPeloId(idUsuario);
        setUsuario(dados.usuario);
      } catch (err) {
        console.log('Erro na requisição:', err.message);
      } finally {
        setIsLoaded(true);
      }
    }
    handleBuscaUsuario();
  }, []);
  
  if (!isLoaded) {
    // Aqui dá pra adicinar uma animação de carregando, e deixar por exemplo em todo container
    // como se fosse carregando, no caso dá pra fazer um componente só pra isso.
    return <h1>Carregando...</h1>;
  }

  return (
    <div>
      {console.log(usuario)}
    </div>
  );
}

export default Dashboard;
