import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ReparacionEquipo from '../Vistas/ReparacionEquipo'
import Contacto from '../Vistas/Contacto';
import Terminos from '../Vistas/Terminos';
import 'bootstrap/dist/css/bootstrap.css';
import Condiciones from '../Vistas/Condiciones';
import Privacidad from '../Vistas/Privacidad';
import Ubicanos from '../Vistas/Ubicanos';
import custocare from '../custocare_logo.png';
import Auth from './Auth';
import {useUser} from 'reactfire';
import Tienda from '../Vistas/Tienda'

function FooterGeneral() {
    const user = useUser();
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/terminos">
                        <Terminos />
                    </Route>
                    <Route exact path="/ubicanos">
                        <Ubicanos />
                    </Route>
                    <Route exact path="/privacidad">
                        <Privacidad />
                    </Route>
                    <Route exact path="/condiciones">
                        <Condiciones />
                    </Route>
                    <Route exact path="/reparacion">
                        <ReparacionEquipo />
                    </Route>
                    <Route exact path="/contacto">
                        <Contacto />
                    </Route>
                    <Route exact path="/tienda">
                        <Tienda />
                    </Route>
                    <Route exact path="/">
                        <div className="App container mt-5 justify-content-center">   
                            {user&&   <p>Usuario:{user.email}</p>}
                            {user&&   <p>BIENVENID@</p>}
                        </div>
                        <Auth/>
                    </Route>
                </Switch>
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <img className="custocareLogoDos" src={custocare} />
                        <b>Custocare</b>
                    </div>
                        <div className="container d-flex flex-column align-items-center">
                        <h5>Nuestros Servicios</h5>
                            <div className="btn-group">
                                <ul>
                                    <li><Link to="/">Crear Cuenta/Ingresar</Link></li>
                                    {/* <li><Link to="/cuidador">Hazte/Entrar Como Cuidador</Link></li> */}
                                    <li><Link to="/tienda">Comprar/Rentar Equipo Médico</Link></li>
                                    <li><Link to="/reparacion">Reparar Equipo Médico</Link></li>
                                    <li><Link to="/ubicanos">Ubicanos En Tu Ciudad</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="/contacto">Contáctanos</Link></li>
                                    <li><Link to="/terminos">Términos</Link></li>
                                    <li><Link to="/privacidad">Privacidad</Link></li>
                                    <li><Link to="/condiciones">Condiciones</Link></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </Router>
        </>
    );
}

export default FooterGeneral;