import api from "./api";

export async function buscaUsuarioPeloId(id) {
  try {
    const res = await api.get(`/api/usuario/${id}`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
}

export async function criaUsuario(usuario) {
  try {
    const res = await api.post('/api/usuario', usuario, {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
  } catch(erro) {
    return erro.response.data;
  }
}

export async function atualizaUsuario(id, usuario) {
  try {
    const res = await api.patch(`/api/usuario/${id}`, usuario, {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data;
  } catch(erro) {
    return erro.response.data;
  }
}

export async function deletaUsario(id,) {
  try {
    const res = await api.delete(`/api/usuario/${id}`);
    return res.data;
  } catch(erro) {
    return erro.response.data;
  }
}
