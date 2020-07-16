import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ReparacionEquipo from '../Vistas/ReparacionEquipo'
import Contacto from '../Vistas/Contacto';
import Terminos from '../Vistas/Terminos';
import TemplateTerminos from './TemplateTerminos';
import 'bootstrap/dist/css/bootstrap.css';
import Condiciones from '../Vistas/Condiciones';
import Privacidad from '../Vistas/Privacidad';
import Ubicanos from '../Vistas/Ubicanos';

function FooterGeneral() {
    return (
        <Fragment>
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
                </Switch>
                <h5>Nuestros Servicios</h5>
                <div>
                    <div className="btn-group">
                        <ul>
                            <li><Link to="/">Crear Cuenta/Ingresar</Link></li>
                            <li><Link to="/cuidador">Hazte/Entrar Como Cuidador</Link></li>
                            <li><Link to="/marketplace">Comprar/Rentar Equipo Médico</Link></li>
                            <li><Link to="/reparacion">Reparar Equipo Médico</Link></li>
                            <li><Link to="/ubicanos">Ubicanos En Tu Ciudad</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group">
                        <ul>
                            <li><Link to="/contacto">Contáctanos</Link></li>
                            <li><Link to="/terminos">Términos</Link></li>
                            <li><Link to="/privacidad">Privacidad</Link></li>
                            <li><Link to="/condiciones">Condiciones</Link></li>
                        </ul>
                    </div>
                </div>
            </Router>
        </Fragment>
    );
}

export default FooterGeneral;