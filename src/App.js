import React from 'react';
import Auth from './Componentes/Auth';
import {useUser} from 'reactfire';
import FooterGeneral from './Componentes/FooterGeneral';
import 'bootstrap/dist/css/bootstrap.css';
import BarraSuperior from './Componentes/BarraSuperior'


function App() {
  
  const user = useUser();
  return (
    <>
      <div className="App">
      <BarraSuperior />
        {/* <div className="App container mt-5 justify-content-center">   
          {user&&   <p>Usuario:{user.email}</p>}
          {user&&   <p>BIENVENID@</p>}
          <Auth/>
        </div> */}
      <FooterGeneral />
      </div>
    </>
  );
}

export default App;

