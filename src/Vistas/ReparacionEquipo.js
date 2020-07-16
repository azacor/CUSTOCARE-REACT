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

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = () => {
        console.log(datos)
        // axios.post('')
    }

    useEffect(()=>{
    }, [datos])

    return(
        
        <>
            <h5>Repara Tu Equipo Médico Con Nosotros</h5>
            <div>
                <div>
                    <input type="text" name="nombre" placeholder="Nombre Completo" className="form-control" onChange={handleInputChange} maxLength size="50" maxlength="50" />
                    
                    <input type="text" name="telefono" placeholder="Teléfono" className="form-control" onChange={handleInputChange} size="50" maxlength="50"/>
                    
                    <input type="text" name="mail" placeholder="Correo Electrónico" className="form-control" onChange={handleInputChange} size="50" maxlength="50"/>
                    
                    <input type="text" name="equipo" placeholder="¿Cuál es el equipo médico que deseas reparar?" className="form-control" onChange={handleInputChange} size="50" maxlength="100"/>
                    
                    <textarea name="explicacion" placeholder="Breve descripción del problema" className="form-control" onChange={handleInputChange} maxlength="500" cols="52" rows="6" />
                    <button type="submit" className="btn btn-primary" onClick={enviarDatos}>Solicitar Cotización</button>
                </div>
            </div>
        </>
    );
}

export default ReparacionEquipo;