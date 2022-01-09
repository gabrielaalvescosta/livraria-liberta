import React, { useState } from 'react';
import { Subtitulo, Barra } from '../Headings/styles';

import './cart.scss';

export default function Cart() {


    return (
        <div className="carrinho-container">
            
            <Subtitulo>Carrinho</Subtitulo>
           
            <Barra left/>
            <div className="cesta">
          
            </div>
        </div>
    )
}
