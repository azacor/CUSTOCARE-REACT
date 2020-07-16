import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    browserHistory,
    Redirect
  } from "react-router-dom";
  import contacto from '../m0038-04.jpg'

function Contacto() {
    return (
    <>        
        <h4>¿Tienes dudas? ¡Chatea con nosotros!</h4>
        <a href="https://api.whatsapp.com/send?phone=521$2281772846&text=Quiero%20m%C3%A1s%20informaci%C3%B3n!%20:)">WhatsApp</a>
        <img src={contacto} />
    </>
    );
}

export default Contacto;