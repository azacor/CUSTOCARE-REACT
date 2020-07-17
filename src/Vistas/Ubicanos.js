import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TemplateUbicanos from '../Componentes/TemplateUbicanos';
import 'bootstrap/dist/css/bootstrap.css';


function Ubicanos(){
    return(
        <>
        <Router>
            <div className="container">
                <h4>Queremos estar más cerca de ti y brindarte un apoyo personalizado!</h4>
            </div>
            <div className="d-flex container bd-highlight">
                <div className="d-flex p-2 flex-grow-1 bd-highlight">
                    <div>
                        <ul>
                            <li><Link to="/ubicanos/cdmx">CDMX</Link></li>
                            <li><Link to="/ubicanos/guadalajara">Guadalajara</Link></li>
                            <li><Link to="/ubicanos/monterrey">Monterrey</Link></li>
                            <li><Link to="/ubicanos/chihuahua">Chihuahua</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/ubicanos/queretaro">Querétaro</Link></li>
                            <li><Link to="/ubicanos/veracruz">Veracruz</Link></li>
                            <li><Link to="/ubicanos/cancun">Cancún</Link></li>
                            <li><Link to="/ubicanos/villahermosa">Villahermosa</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="justify-content-center p-2 bd-highlight">
                    <Switch>
                        <Route exact path="/ubicanos/cdmx">
                            <TemplateUbicanos ciudad="CDMX">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202546.2577880135!2d-99.23651282821852!3d19.386952821129654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1594864331220!5m2!1ses-419!2smx" width="450" height="300"allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </TemplateUbicanos>
                        </Route>
                        <Route exact path="/ubicanos/guadalajara">
                            <TemplateUbicanos ciudad="Guadalajara">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166975.88896023814!2d-103.40472299260611!3d20.687774899996267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18cb52fd39b%3A0xd63d9302bf865750!2sGuadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1594866222610!5m2!1ses-419!2smx" width="450" height="300"allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </TemplateUbicanos>
                        </Route>
                        <Route exact path="/ubicanos/monterrey">
                            <TemplateUbicanos ciudad="Monterrey">

                            </TemplateUbicanos>
                        </Route>
                        <Route exact path="/ubicanos/chihuahua">
                            <TemplateUbicanos ciudad="Chihuahua">

                            </TemplateUbicanos>
                        </Route>
                        <Route exact path="/ubicanos/queretaro">
                            <TemplateUbicanos ciudad="Querétaro">
                                
                            </TemplateUbicanos>
                        </Route>
                        <Route exact path="/ubicanos/veracruz">
                            <TemplateUbicanos ciudad="Veracruz">
                                
                            </TemplateUbicanos>
                        </Route>
                        <Route exact path="/ubicanos/villahermosa">
                            <TemplateUbicanos ciudad="Villahermosa">
                                
                            </TemplateUbicanos>
                        </Route>
                        <Route exact path="/ubicanos/cancun">
                            <TemplateUbicanos ciudad="Cancún">
                                
                            </TemplateUbicanos>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
        </>
    );
}

export default Ubicanos;