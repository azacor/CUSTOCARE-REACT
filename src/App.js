import React from 'react';
import './App.css';
import Auth from './componentes/Auth'
import {useUser} from 'reactfire';



function App() {
  
  const user = useUser();
  return (
    <div className="App container mt-5 justify-content-center">   
{     user&&   <p>Usuario:{user.email}</p>}
{     user&&   <p>BIENVENID@</p>}
        <Auth/>

    </div>
  );
}

export default App;
