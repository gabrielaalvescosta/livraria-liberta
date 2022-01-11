import api from "./api";

export async function buscaLivros(params) {
  try {
    const res = await api.get('/api/livro/todos', { params: params });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
}
