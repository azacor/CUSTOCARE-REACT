import React from 'react';
import custocare from '../custocare_logo.png';

function BarraSuperior(){
    return (
        <>
        <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between">
                <img src={custocare} />
                <h1>Custocare</h1>
            </div>
            <div className="">
                <button type="submit">Hazte Cuidador</button>
                <button type="submit">Login</button>
            </div>
        </div>
        </>
    );
}

export default BarraSuperior;