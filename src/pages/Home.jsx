import React from 'react';

import CardLivro from '../components/CardLivro/CardLivro'

function Home() {
  const livro = {
    id_livro: 2,
    ISBN: '8576571978',
    titulo: 'Trilogia Fundação',
    descricao: 'Obra-prima de Isaac Asimov, a trilogia da Fundação recebeu o histórico prêmio Hugo de Melhor série de ficção científica e fantasia de todos os tempos. Baseada no clássico Declínio e queda do Império Romano, de Edward Gibbon, a trilogia sedimentou seu autor como um dos maiores escritores do gênero e influenciou outras mentes geniais, como Carl Sagan, Steven Spielberg, George Lucas, o nobel de economia Paul Krugman, Elon Musk. A humanidade está em risco. Uma ciência revolucionária prevê uma longa e inevitável era de trevas e barbárie. Para evitar que isso aconteça, o chamado plano Seldon é colocado em prática ao longo de séculos, e percorre a história da galáxia, prevendo conflitos de nossa civilização. Mas poderá o comportamento humano obedecer a um padrão científico?',
    categoria: 'Ficção Científica',
    url_img: 'https://images-na.ssl-images-amazon.com/images/I/41D5QQMs-TL._SY498_BO1,204,203,200_.jpg',
    preco: 103.9,
    paginas: 880,
    ano_publicacao: 2019,
    editora: 'Editora Aleph',
    autor: 'Isaac Asimov',
  };

  return (
    <CardLivro livro={livro} />
  );
}

export default Home;
