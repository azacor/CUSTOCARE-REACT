import React from 'react';

function TemplateUbicanos({children, ciudad}){
    const arr = Object.values({ciudad})
    console.log({ciudad})
    console.log(arr)

    const ensenaCiudad = () =>{
        if(arr[0] === "CDMX"){
            return `En la ${ciudad}, estamos en las delegaciones: Benito Juárez, Venustiano Carranza, Coyoacán, Iztapalapa, Miguel Hidalgo y Azcapotzalco.`
        }else if (arr[0] === "Guadalajara"){
            return `En ${ciudad}, estamos en las zonas de: Guadalajara, Tlajomulco, Zapopan y Tlaquepaque.`
        }else if(arr[0] === "Monterrey"){
            return `En ${ciudad}, estamos en las zonas de: Monterrey, San Pedro, San Nicolás, Escobedo, Santa Catarina y Apodaca.`
        }else if (arr[0] === "Chihuahua"){
            return `En el Estado de ${ciudad}, estamos en las siguientes ciudades: Chihuahua, Ciudad Juárez, Creel y Delicias.`
        }else if (arr[0] === "Querétaro"){
            return `En el Estado de ${ciudad}, estamos en las siguientes ciudades: Santiago de Querétaro, El Marqués, Jurica y Juriquilla.`
        }else if(arr[0] === "Veracruz"){
            return `En el Estado de ${ciudad}, estamos en las siguientes ciudades: Veracruz Puerto, Xalapa, Córdoba, Orizaba y Coatzacoalcos.`
        }else if (arr[0] === "Villahermosa"){
            return `En ${ciudad} tenemos servicios en cualquier punto de la ciudad. Próximamente estaremos llegando a más puntos del Estado.`
        }else if (arr[0] === "Cancún"){
            return `En ${ciudad} tenemos servicios en cualquier punto de la ciudad. Próximamente estaremos llegando a más puntos del Estado.`
        }else{
            console.log('no funciona :(')
        }
    }

    return(
        <>
        <h4>Queremos estar más cerca de ti y brindarte un apoyo personalizado!</h4>
        <h5>Por esto, estamos en {ciudad}:</h5>
        <div className="d-flex justify-content-between">
            {children}
            {ensenaCiudad()}
        </div>
        </>
    );
}

export default TemplateUbicanos;