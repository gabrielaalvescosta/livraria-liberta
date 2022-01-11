import axios from 'axios';

const urlBase = 'https://livraria-liberta-api.herokuapp.com/api';

export async function criaUsuario(usuario) {
  let url = `${urlBase}/usuario`;
  
        try {
            const res = await axios.post(url, usuario, {headers: {'Content-Type': 'application/json'}});
            return res.data;
        } catch(erro) {
            return erro.response.data;
        }

    } 
