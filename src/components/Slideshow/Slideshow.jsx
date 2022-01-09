import { useState, useEffect } from 'react';
import React from 'react';
import './slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Slideshow = ( { imgs }) => {


    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(0)
    }, []);
    

    const next = () => {
        if(index === imgs.length -1){
            setIndex(1);
        } 
        else {
            setIndex(index+1);
        }
    }

    const prev = () => {
        if(index === 0) {
            setIndex(imgs.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }


    return (
        <div className="slideshow">
            <div className="imagens">
            <img src={imgs[index]} />
            </div>

        <div className="acoes">
          <button onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button onClick={next}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
    )
}

export default Slideshow;