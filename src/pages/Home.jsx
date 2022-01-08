import React from 'react';
import Slideshow from '../components/Slideshow/Slideshow';

const fotos = [
  'https://livrariacultura.vteximg.com.br/arquivos/ids/74884819/Bhero_LIteratura1600x300.jpg',
  'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500'
];

function Home() {
  return (
    <div>
     <Slideshow imgs={fotos} />
    </div>
  )
}

export default Home;
