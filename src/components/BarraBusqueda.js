import React from "react"


const BarraBusqueda = () => {
    return( <>
       <nav className="navbar navbar-light bg-light">
        <div className="form-inline">
          <input className="form-control mr-sm-2" type="buscar" placeholder="Buscar producto" aria-label="buscar"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> </div>
      </nav>
    
   </> )
}

export default BarraBusqueda