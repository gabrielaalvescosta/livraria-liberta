import React from 'react';
import loading from '../../assets/loading.svg';
import './loading.scss';

const Loading = () => {
    return (
        <div className="fade">
            <img src={loading} />
        </div>
    );
}

export default Loading;
