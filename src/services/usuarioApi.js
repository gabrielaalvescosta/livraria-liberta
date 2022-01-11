import api from "./api";

export async function buscaUsuarioPeloId(id) {
  try {
    const res = await api.get(`/api/usuario/${id}`);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
}
