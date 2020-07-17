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
            imagen: "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7502256723700.jpg",
            precioDeVenta: 3000 ,
            precioDeRenta: 200 ,
        
        },
        { 
            titulo:'Muletas',
            imagen: "https://cdn1.coppel.com/images/catalog/pm/5428313-1.jpg",
            precioDeVenta: 800 ,
            precioDeRenta: 80 ,
        
        },
        { 
            titulo:'Andador de Acero',
            imagen: "https://vidaabuelo.com/wp-content/uploads/2016/11/andador-plegable-sin-ruedas.jpg",
            precioDeVenta: 1500 ,
            precioDeRenta: 150 ,
        
        },
        { 
            titulo:'Monitor de Signos Vitales',
            imagen: "https://medical-solutions.com.mx/795/monitor-se-signos-vitales-veterinario-este-aparato-puede-monitorizar-signos-vitals-como-ecg-frecuencia-respiratoria-spo2-nibp-y-.jpg",
            precioDeVenta: 9000 ,
            precioDeRenta: 900 ,
        
        },
        { 
            titulo:'Camilla de Hospital',
            imagen: "https://www.costco.com.mx/medias/sys_master/products/hbd/hc0/13054045323294.jpg",
            precioDeVenta: 5000 ,
            precioDeRenta: 500 ,
        
        },
        { 
            titulo:'Tanque de Oxigeno',
            imagen: "https://www.nafarrate.com/image/cache/catalog/productos/tanque-oxigeno-682-lt-c-regulador-canula-humidificador-y-carro-539-500x500.jpg",
            precioDeVenta: 6000 ,
            precioDeRenta: 600 ,
        
        },
        { 
            titulo:'Bota walker',
            imagen: "https://www.ortoeco.com/blog/wp-content/uploads/2019/01/bota-inmovilizadora-walker.jpg",
            precioDeVenta: 4000 ,
            precioDeRenta: 400 ,
        
        },
        { 
            titulo:'Ventilador Médico',
            imagen: "https://cdn-5e66d974f911c80ca0fd98df.closte.com/wp-content/uploads/2020/05/Ventilador-Respironics-E30-Philips.png",
            precioDeVenta: 8000 ,
            precioDeRenta: 800 ,
        
        },
        { 
            titulo:'Cómodo Plegable',
            imagen: "https://cdn-5e66d974f911c80ca0fd98df.closte.com/wp-content/uploads/2017/06/comodo_plegable_acero_cromado-comodo_plegable_acero_cromado_emc_rehabilitacion-equipo_medico_consultoria.png",
            precioDeVenta: 2000 ,
            precioDeRenta: 200 ,
        
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