import React from "react"
import Carta from "./../components/Carta"
import Carro from "./../components/Carro"
import Cabecera from "./../components/Cabecera"
import BarradeBusqueda from "./../components/BarraBusqueda"
import tienda from "./../views/tienda.css"



const Tienda= () => {
  
    
    
    const productos = [
    
       
        { 
        
            titulo:'Silla de Ruedas',
            precioDeVenta: 6000 ,
            precioDeRenta: 700 ,
            imagen: "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7502256723700.jpg",
           
        
        },
        { 
            titulo:'Muletas',
            precioDeVenta: 3000 ,
            precioDeRenta: 300 ,
            imagen: "https://cdn1.coppel.com/images/catalog/pm/5428313-1.jpg",
           
        
        },
        { 
            titulo:'Andador de Acero',
            precioDeVenta: 3000 ,
            precioDeRenta: 390 ,
            imagen: "https://vidaabuelo.com/wp-content/uploads/2016/11/andador-plegable-sin-ruedas.jpg",
        
        },
        { 
            titulo:'Monitor de Signos Vitales',
            precioDeVenta: 9000 ,
            precioDeRenta: 900 ,
            imagen: "https://medical-solutions.com.mx/795/monitor-se-signos-vitales-veterinario-este-aparato-puede-monitorizar-signos-vitals-como-ecg-frecuencia-respiratoria-spo2-nibp-y-.jpg",
            
        
        },
        { 
            titulo:'Camilla de Hospital',
            precioDeVenta: 5000 ,
            precioDeRenta: 500 ,
            imagen: "https://www.costco.com.mx/medias/sys_master/products/hbd/hc0/13054045323294.jpg",
           
        
        },
        { 
            titulo:'Tanque de Oxigeno',
            precioDeVenta: 6000 ,
            precioDeRenta: 600 ,
            imagen: "https://www.nafarrate.com/image/cache/catalog/productos/tanque-oxigeno-682-lt-c-regulador-canula-humidificador-y-carro-539-500x500.jpg",
            
        
        },
        { 
            titulo:'Bota walker',
            precioDeVenta: 4000 ,
            precioDeRenta: 400 ,
            imagen: "https://www.ortoeco.com/blog/wp-content/uploads/2019/01/bota-inmovilizadora-walker.jpg",
            
        
        },
        { 
            titulo:'Ventilador Médico',
            precioDeVenta: 8000 ,
            precioDeRenta: 800 ,
            imagen: "https://cdn-5e66d974f911c80ca0fd98df.closte.com/wp-content/uploads/2020/05/Ventilador-Respironics-E30-Philips.png",
           
        
        },
        { 
            titulo:'Cómodo Plegable',
            precioDeVenta: 2000 ,
            precioDeRenta: 200 ,
            imagen: "https://cdn-5e66d974f911c80ca0fd98df.closte.com/wp-content/uploads/2017/06/comodo_plegable_acero_cromado-comodo_plegable_acero_cromado_emc_rehabilitacion-equipo_medico_consultoria.png",
            
        },
        
         ]
        
const pintarCartas = () => {
    return productos.map((producto)=>{  
    return ( 
       
        <Carta 
        src={producto.imagen} 
        precioDeVenta={producto.precioDeVenta}
        precioDeRenta={producto.precioDeRenta}
        titulo={producto.titulo}
        ></Carta>


    )
    })
}

 return ( <>
<Cabecera/> 
<Carro/>
<BarradeBusqueda/>



<div productos="padre d-flex justify-content-around align-items-center">
{pintarCartas()}

</div>
</>
 ) ;

}
export default Tienda;