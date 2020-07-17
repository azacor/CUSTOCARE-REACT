import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    browserHistory,
    Redirect
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.css';
  import contacto from '../chat.png'

function Contacto() {
    return (
    <div>
        <div className="container">
            <h4>¿Tienes dudas? ¡Chatea con nosotros!</h4>
        </div>
        <div className="d-flex justify-content-around">
            <div className="d-flex align-items-center">
                <ul>
                    <li>
                        Escríbenos por <a href="https://api.whatsapp.com/send?phone=521$2281772846&text=Quiero%20m%C3%A1s%20informaci%C3%B3n!%20:)">WhatsApp</a> !
                    </li>
                    <li>
                        Escríbenos por <a href="mailto:nieves9427@gmail.com">Correo</a> !
                    </li>
                </ul>
            </div>
            <div className="d-flex align-items-center">
                <img className="chatea" src={contacto} />
            </div>
        </div>
    </div>
    );
}

export default Contacto;