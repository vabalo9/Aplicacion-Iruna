import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import FiltrosITSU from './FiltrosITSU';
import FiltrosIDVM from './FiltrosIDVM';
import Ejemplo from './Ejemplo';
import FiltrosIDST from './FiltrosIDST';


const habitaciones =[
    {habitacion:118, categoria:"IDST"},
    {habitacion:126, categoria:"IDST"},
    {habitacion:525, categoria:"IDST"},
    {habitacion:327, categoria:"IDST"},
    {habitacion:426, categoria:"IDST"},
    {habitacion:226, categoria:"IDST"},
    {habitacion:326, categoria:"IDST"},
    {habitacion:526, categoria:"IDST"},

    {habitacion:125, categoria:"IDWST", detalles:["El frigobar esta dentro del armario"]},
    {habitacion:225, categoria:"IDWST"},
    {habitacion:325, categoria:"IDWST"},
    {habitacion:127, categoria:"IDWST"},
    {habitacion:425, categoria:"IDWST"},
    {habitacion:227, categoria:"IDWST"},
    {habitacion:318, categoria:"IDWST"},
    {habitacion:418, categoria:"IDWST"},
    {habitacion:527, categoria:"IDWST"},
    {habitacion:427, categoria:"IDWST"},
    {habitacion:218, categoria:"IDWST"},

    {habitacion:104, categoria:"IDSST"},
    {habitacion:519, id:4,  categoria:"IDSST", interna:true, vista:"Pulmon interno del Hotel", detalles:["Queda al lado del office de las mucamas"]},
    {habitacion:119, categoria:"IDSST", interna:true},
    {habitacion:219, categoria:"IDSST", interna:true},
    {habitacion:319, categoria:"IDSST", interna:true},
    {habitacion:419, categoria:"IDSST", interna:true},
    {habitacion:120, categoria:"IDSST", interna:true},
    {habitacion:123, categoria:"IDSST"},
    {habitacion:124, categoria:"IDSST"},
    {habitacion:220, categoria:"IDSST", interna:true},
    {habitacion:420, categoria:"IDSST", interna:true},
    {habitacion:520, categoria:"IDSST", interna:true},
    {habitacion:523, categoria:"IDSST"},
    {habitacion:524, categoria:"IDSST"},
    {habitacion:423, categoria:"IDSST"},
    {habitacion:424, categoria:"IDSST"},
    {habitacion:223, categoria:"IDSST"},
    {habitacion:224, categoria:"IDSST"},
    {habitacion:323, categoria:"IDSST"},
    {habitacion:324, categoria:"IDSST"},
    {habitacion:407, categoria:"IDSST"},
    {habitacion:204, categoria:"IDSST"},

    {habitacion:103, categoria:"IDWSST"},
    {habitacion:203, categoria:"IDWSST", detalles:["Junto a 204 se hace el departamento G"]},
    {habitacion:408, categoria:"IDWSST"},
    {habitacion:308, categoria:"IDWSST"},
    {habitacion:320, categoria:"IDWSST", interna:true},

    {habitacion:112, id:3, convertible:true, sillones:true,  categoria:"IDVM", vista:"Frente del hotel", detalles:["Cuenta con dos sillones pequeños"]},
    {habitacion:114, categoria:"IDVM", interna:true, vista:"Frente del hotel"},
    {habitacion:212, convertible:true, sillones:true, categoria:"IDVM", interna:false, vista:"Frente del hotel"},
    {habitacion:214, categoria:"IDVM", interna:true, vista:"Frente del hotel"},
    {habitacion:215, categoria:"IDVM", interna:true, conectada:true, vista:"Frente del hotel", detalles:["La habitacion cuenta con un pequeño pasillo donde se puede dejar el equipaje"]},
    {habitacion:411, categoria:"IDVM", convertible:true, vista:"Frente del hotel"},
    {habitacion:310, convertible:true, categoria:"IDVM", interna:false, vista:"Frente del hotel"},
    {habitacion:312, categoria:"IDVM", sillones:true, ducha:true, vista:"Frente del hotel"},
    {habitacion:314, categoria:"IDVM", interna:true, ducha:true, vista:"Frente del hotel"},
    {habitacion:412,  categoria:"IDVM", sillones:true, convertible:true, vista:"Frente del hotel"},
    {habitacion:414, categoria:"IDVM", interna:true, vista:"Frente del hotel"},
    {habitacion:415, categoria:"IDVM", interna:true, vista:"Frente del hotel", detalles:["La habitacion cuenta con un pequeño pasillo donde se puede dejar el equipaje"]},

    {habitacion:410, categoria:"IDWM", convertible:true, vista:"Frente del hotel"},
    {habitacion:111, categoria:"IDWM", convertible:true, vista:"Frente del hotel"},
    {habitacion:115, categoria:"IDWM", interna:true, convertible:true, conectada:true, vista:"Frente del hotel"},
    {habitacion:311, categoria:"IDWM", convertible:true, vista:"Frente del hotel"},
    {habitacion:315, categoria:"IDWM", interna:true, vista:"Frente del hotel"},
    {habitacion:211, categoria:"IDWM", convertible:true, vista:"Frente del hotel"},

    {habitacion:122, categoria:"ITWS", id:5,   vista:"Pulmon interno del Hotel", detalles:["Queda en frente del office de las mucamas"]},
    {habitacion:222, categoria:"ITWS", vista:"Pulmon interno del Hotel", detalles:["Queda en frente del office de las mucamas"]},
    {habitacion:322, categoria:"ITWS", vista:"Al mar de contrafrente", detalles:["Queda en frente del office de las mucamas"]},

    {habitacion:422, categoria:"ITSU", vista:"Al mar de contrafrente", detalles:["Queda en frente del office de las mucamas"]},
    {habitacion:522, categoria:"ITSU", vista:"Al mar de contrafrente", detalles:["Queda en frente del office de las mucamas"]},
    
    {habitacion:307,  categoria:"ISTE", vista:"A pulmon interno del hotel", detalles:["A diferencia de las otras Suites tiene la antesala es muy pequeña (no le entra otra cama)"]},
    {habitacion:117,  categoria:"ISTE", vista:"A pulmon interno del hotel",},
    {habitacion:217,  categoria:"ISTE", vista:"A pulmon interno del hotel",},
    {habitacion:317,  categoria:"ISTE", vista:"A pulmon interno del hotel",},
    {habitacion:417,  categoria:"ISTE", vista:"A pulmon interno del hotel",},

    {habitacion:107,  categoria:"ITSTE", vista:"A pulmon interno del hotel",},
    {habitacion:207,  categoria:"ITSTE", vista:"A pulmon interno del hotel",},
    {habitacion:301,  categoria:"ITSTE", vista:"A pulmon interno del hotel",},
    {habitacion:305,  categoria:"ITSTE", vista:"A pulmon interno del hotel",},
    {habitacion:401,  categoria:"ITSTE", vista:"A pulmon interno del hotel",},
    {habitacion:405,  categoria:"ITSTE", vista:"A pulmon interno del hotel",},

    {habitacion:110, categoria:"ISVM",vista:"Frente del hotel",detalles:["Tiene hidromasaje"]},
    {habitacion:210, categoria:"ISVM",vista:"Frente del hotel",detalles:["Tiene hidromasaje"]},
]

const ItemListContainer = () => {
    const { categoria } = useParams();
    
    let opciones=habitaciones.filter((el)=>el.categoria===categoria)

    const [boton, setBoton] = useState(false)

    const [btnSillones, setBtnSillones] = useState(false)

    const [btnDucha, setBtnDucha] = useState(false)

    const [btnConvertible, setBtnConvertible] = useState(false)

    const [btnInterna, setBtnInterna] = useState(false)

    const[ btnConectada, setBtnConectada] = useState(false)

    const filtrarInterna=()=>{setBtnInterna(!btnInterna)}

    const filtrarDucha=()=>{setBtnDucha(!btnDucha)}

    const filtrarConvertible=()=>{setBtnConvertible(!btnConvertible)}

    const filtrarCategoria =()=>{setBoton(!boton)}

    const filtrarSillon =()=>{setBtnSillones(!btnSillones)}

    const filtrarConectadas =()=>{setBtnConectada(!btnConectada)}

    
    
    if (btnDucha){opciones=opciones.filter((el)=>el.ducha === true)}

    
    if (boton) {opciones = opciones.filter((el)=>el.vista == "Al mar de contrafrente")}
    
    if (btnSillones) {opciones = opciones.filter((el)=>el.sillones === true)}
    
    if (btnInterna) { opciones = opciones.filter(habitacion => !habitacion.interna)}
    
    if (btnConvertible){opciones = opciones.filter((el)=>el.convertible === true)}

    if (btnConectada){opciones = opciones.filter(habitacion => !habitacion.conectada)}

  
    

  return (
    <>
    <div className='ItemListContainer'>
      <div className='div-filtros'>
        { categoria === "ITSU" || categoria === "ITWS" ?
        <FiltrosITSU filtrarCategoria={filtrarCategoria} />

        : categoria=== "IDST" || categoria===  "IDWST" || categoria===  "IDWSST" || categoria===  "IDSST" ? 
        <FiltrosIDST filtrarConvertible={filtrarConvertible}
        filtrarInterna={filtrarInterna}  />

        : categoria === "IDVM" || categoria === "IDWM" ? 
        <FiltrosIDVM filtrarConvertible={filtrarConvertible}
        filtrarDucha={filtrarDucha}
        filtrarSillon={filtrarSillon}
        filtrarInterna={filtrarInterna} 
        filtrarConectadas={filtrarConectadas}/>
        : <Ejemplo />
        }
      </div>
      
      <ItemList opciones={opciones}/>
    </div>
    </>
  )
}

export default ItemListContainer