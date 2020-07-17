import React from "react";
//import "./../components/Carta.css";
import axios from "axios";
import Carro from "./../components/Carro";
import bootstrap from "react-bootstrap/card";


const Carta= ({src, precioDeVenta, precioDeRenta, titulo}) => {
 function agregarV (){
   axios.post("https://custocare-tienda.firebaseio.com/carrito.json",{
     titulo:titulo,
     precioDeVenta:precioDeVenta,})
   .then(({data})=>{});
   //.catch(()=>{});
 }
 function agregarR (){
   axios.post("https://custocare-tienda.firebaseio.com/carrito.json", {
     titulo:titulo,
     precioDeRenta:precioDeRenta,
   })
   .then(({data})=>{});
 }
 function eliminar (){
  axios.delete("https://custocare-tienda.firebaseio.com/carrito.json", {
    titulo:titulo,
    precioDeRenta:precioDeRenta,
  })
  .then(({data})=>{});}

return( <> 
<div productos="padre d-flex justify-content-around align-items-center"></div>
<div className="card" > 
            <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <img src={src}/>
              <button onClick={agregarV}>Venta: ${precioDeVenta}         
              </button>
              <button onClick={agregarR}>Renta: ${precioDeRenta} por día</button>
              
            </div>
</div>
</>
) 



}

export default Carta