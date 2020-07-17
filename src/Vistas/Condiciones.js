import React from 'react';
import TemplateTerminos from '../Componentes/TemplateTerminos';
import 'bootstrap/dist/css/bootstrap.css';

function Condiciones(){
    return(
        <>
        <div className="container">
            <TemplateTerminos title="Términos y Condiciones Generales del Seguro de Custocare">
                1- DEFINICIONES
                <p><h6>ACCIDENTE:</h6> Lesión traumática del organismo del Animal cubierto procedente de la acción repentina e imprevisible de una causa exterior a este.</p>
                <p><h6>CUBIERTO:</h6> Perro o gato que esté bajo la custodia de un Petsitter en el marco del contrato de servicio de custodia de animal cerrado entre el Adherente y el Petsitter por intermediación de HOLIDOG. La identidad, formalizada por un dispositivo admitido (tatuaje, chip) así como las coordenadas de su propietario, figuran en el contrato de prestación de custodia del animal, así como en el boletín de afiliación al presente contrato.</p>
                <p><h6>BENEFICIARIO/AFILIADO:</h6> Propietario del animal, persona física residente en el país en el cual el contrato de prestación de custodia del animal con un Petsitter por intermediación de HOLIDOG se ha suscrito y se ha adherido mediante un boletín de suscripción al presente contrato.</p>
                <p><h6>PETSITTER:</h6> Persona física que ha cerrado el contrato de prestación de custodia de animal cubierto con el Adherente por intermediación de HOLIDOG.</p>
                <p><h6>GASTOS VETERINARIOS:</h6> Honorarios del doctor veterinario y/o gastos propios a la intervención quirúrgica, medicamentos prescritos, gastos de anestesia, gastos de análisis, radiodiagnósticos, gastos de transporte en ambulancia animal, gastos de estancias en clínica veterinaria después de la intervención, excluyendo cualquier otro gasto. Los gastos veterinarios deben estar médicamente prescritos y las curas llevadas a cabo por un doctor veterinario diplomado, autorizado a ejercer conforme a la legislación vigente y a las reglas ordinales (ejemplo: Consejo del Orden en Francia... ).</p>
                <p><h6>ENFERMEDAD:</h6> Cualquier alteración del estado de salud del animal no consecutiva a un accidente constatado por un doctor/veterinario diplomado, autorizado a ejercer, por la cual los síntomas aparecen después de una fase de desarrollo o de incubación en el organismo.</p>
                <p><h6>PROPIETARIO:</h6> Persona física del país en el cual se ha suscrito el contrato de prestación de custodia de animal con un Petsitter por intermediación de HOLIDOG y a la cual pertenece el animal, a saber el Asegurado/ Adherente/Beneficiario que ha suscrito un contrato de prestación de custodia de animal con un Petsitter por intermediación de HOLIDOG y que se ha adherido al presente contrato mediante el boletín de adhesión.</p>
            </TemplateTerminos>
        </div>
        </>
    );
}

export default Condiciones;