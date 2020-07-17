import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tienda from "./views/Tienda"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
       <Switch>
          <Route path="/tienda">
          <div className="App">
          <Tienda> </Tienda>
          </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
