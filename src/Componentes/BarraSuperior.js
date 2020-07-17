import React from 'react';
import custocare from '../custocare_logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/general.css'

function BarraSuperior(){
    return (
        <>
            <div className="d-flex bd-highlight">
                <div className="d-flex p-2 flex-grow-1 bd-highlight">
                    <div><img className="custocareLogo" src={custocare} /></div>
                    <div className="align-self-center"><h1>Custocare</h1></div>
                </div>
                {/* <div className="d-flex justify-content-center p-2 bd-highlight">
                    <div className="align-self-center"><button className="pruebaBoton btn btn-primary   " type="submit">Hazte Cuidador</button></div>
                    <div className="align-self-center"><button className="pruebaBoton btn btn-primary" type="submit">Login</button></div>
                </div> */}
            </div>
        </>
    );
}

export default BarraSuperior;