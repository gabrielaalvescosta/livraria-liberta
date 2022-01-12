import api from "./api";

export async function logaUsuario(usuario) {
  try {
    const res = await api.post('/api/auth/login', usuario, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
}

export async function deslogaUsuario() {
  try {
    await api.get('/api/auth/logout');
  } catch (err) {
    return err.response.data;
  }
}
