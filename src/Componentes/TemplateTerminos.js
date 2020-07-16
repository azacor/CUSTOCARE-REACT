import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function TemplateTerminos({children, title}){
    return(
        <>
        <div className="d-flex justify-content-around">
            <h4>{title}</h4>
            <a href="javascript:window.print()"><img src="https://icon-icons.com/icons2/472/PNG/32/print-48_45058.png" /> Imprimir esta página</a>
        </div>
        <p>Actualizados al día: 15/07/2020</p>
        {children}
        </>
    );
}

export default TemplateTerminos;