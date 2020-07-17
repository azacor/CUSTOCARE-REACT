import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ReparacionEquipo = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        telefono: '',
        mail: '',
        equipo: '',
        explicacion: '',
    });
    const [palabra, setPalabra] = useState('¡No olvides registrar todos los campos!');

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = () => {
        console.log(datos)
        axios.post('https://prueba-cinta-roja-21014.firebaseio.com/tasks.json', datos)
        .then(({data})=>{
            if(data){
                const arr = Object.values(datos)
                setPalabra('Gracias ' + arr[0] + ' , tus datos fueron recibidos satisfactoriamente. Alguien del equipo técnico se pondrá en contacto contigo después de haber evaluado el problema con tu(s) ' + arr[3] + '. Esperamos podernos poner en contacto contigo a través del correo ' + arr[2] + ' en un lapso no mayor a 2 días.')
            }else{
                console.log('no se pudo')
            }
        })
        .catch(()=>{
            console.log('algo salió mal')
        })
    }

    useEffect(()=>{
    }, [datos])

    return(
        
        <>
            <div className="container">
            <h5>Repara Tu Equipo Médico Con Nosotros</h5>
                <div>
                    <input type="text" name="nombre" placeholder="Nombre Completo" className="form-control" onChange={handleInputChange} maxLength size="50" maxlength="50" />
                    
                    <input type="text" name="telefono" placeholder="Teléfono" className="form-control" onChange={handleInputChange} size="50" maxlength="50"/>
                    
                    <input type="text" name="mail" placeholder="Correo Electrónico" className="form-control" onChange={handleInputChange} size="50" maxlength="50"/>
                    
                    <input type="text" name="equipo" placeholder="¿Cuál es el equipo médico que deseas reparar?" className="form-control" onChange={handleInputChange} size="50" maxlength="100"/>
                    
                    <textarea name="explicacion" placeholder="Breve descripción del problema" className="form-control" onChange={handleInputChange} maxlength="500" cols="52" rows="6" />
                    <button type="submit" className="btn btn-primary" onClick={enviarDatos}>Solicitar Cotización</button>
                </div>
                <p /><h5>{palabra}</h5>
            </div>
        </>
    );
}

export default ReparacionEquipo;