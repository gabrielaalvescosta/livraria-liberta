import api from "./api";

import axios from 'axios';

export async function criaUsuario(usuario) {
  try {
    const res = await axios.post('/api/usuario', usuario, {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
  } catch(erro) {
    return erro.response.data;
  }
}

export async function buscaUsuarioPeloId(id) {
  try {
    const res = await api.get(`/api/usuario/${id}`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
}
