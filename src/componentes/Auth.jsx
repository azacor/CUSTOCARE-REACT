import React, {useState, Component} from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser, FirebaseAppProvider } from 'reactfire';

export default (props) =>{
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const firebase = useFirebaseApp ();
    const user = useUser (); 

const submit = async () => {
    await firebase.auth ().createUserWithEmailAndPassword (email, password);
 
}

const login = async () =>{
    await firebase.auth().signInWithEmailAndPassword(email,password);
}


const logout = async () => {
  await firebase.auth().signOut() 
}

    return (
    <div className="container">
        {
            !user &&
            <div className="col align-self-center form-group">
            <h1>CUSTOCARE</h1>
            <div className="row">

            <label htmlFor= "email"> Email</label>
            <input type="email" id="email" className="form-control" onChange = {(ev)=> setEmail(ev.target.value) } />
            <label htmlFor ="password"  className="mt-4"> Contraseña</label>
            <input type="password" id="password" className="form-control" onChange = {(ev)=> setPassword(ev.target.value) }/>
            </div>  
            <div className="row justify-content-around">
            <button className="btn btn-outline-info mt-3" onClick={login}>Iniciar Sesión</button>
            <button className="btn btn-outline-info mt-3" onClick={submit}>Crear Cuenta</button>
            </div>
        </div>
        }
        {
            user && <button className="btn btn-outline-info mt-3" onClick = {logout}> Cerrar Sesión </button>
        }

    </div> 


    )
}


