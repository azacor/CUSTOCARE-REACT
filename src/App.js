import React from 'react';
import './App.css';
import Auth from './componentes/Auth'
import {useUser} from 'reactfire';
import FooterGeneral from './Componentes/FooterGeneral';
import 'bootstrap/dist/css/bootstrap.css';
import BarraSuperior from './Componentes/BarraSuperior'


function App() {
  
  const user = useUser();
  return (
    <div className="App container mt-5 justify-content-center">   
{     user&&   <p>Usuario:{user.email}</p>}
{     user&&   <p>BIENVENID@</p>}
        <Auth/>
    <div className="App">
    <BarraSuperior />
    <FooterGeneral />
    </div>
  );
}

export default App;

