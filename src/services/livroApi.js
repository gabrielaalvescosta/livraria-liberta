import axios from 'axios';

const urlBase = 'https://livraria-liberta-api.herokuapp.com/api/livro';

export async function buscaLivros(query) {
  let url = `${urlBase}/todos`;
  const queryArr = Object.entries({ ...query });

  if (queryArr.length) {
    url += `?${queryArr[0][0]}=${queryArr[0][1]}`;
  }

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return err;
  }
}
