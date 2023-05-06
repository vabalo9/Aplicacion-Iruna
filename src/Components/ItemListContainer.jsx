import React, {useState, useEffect} from 'react'
import { useParams, useLocation } from "react-router-dom";
import ItemList from './ItemList';
import FiltrosITSU from './FiltrosITSU';
import FiltrosIDVM from './FiltrosIDVM';
import Ejemplo from './Ejemplo';
import FiltrosIDST from './FiltrosIDST';
import FiltrosIDEP from './FiltrosIDEP';


const habitaciones =[
    {habitacion:118, categoria:"IDST"},
    {habitacion:126, categoria:"IDST"},
    {habitacion:525, categoria:"IDST",interna:true, ducha:true, detalles:["Es una habitación bastante amplia","Se ve el mar si uno se sienta en la cama"] },
    {habitacion:327, categoria:"IDST"},
    {habitacion:426, categoria:"IDST"},
    {habitacion:226, categoria:"IDST"},
    {habitacion:326, categoria:"IDST"},
    {habitacion:526, categoria:"IDST", interna:true, detalles:["Se ve el mar asomandose, pulmon intermedio"]},

    {habitacion:125, categoria:"IDWST", detalles:["El frigobar esta dentro del armario"]},
    {habitacion:225, categoria:"IDWST", vista:"Al mar de contrafrente", ducha:true},
    {habitacion:325, categoria:"IDWST", ducha:true, departamento:true, detalles:["Se hace departamento con 324"]},
    {habitacion:127, categoria:"IDWST"},
    {habitacion:425, categoria:"IDWST", departamento:true, ducha:true, vista:"Al mar de contrafrente", detalles:["Se hace departamento con 424"]},
    {habitacion:227, categoria:"IDWST"},
    {habitacion:318, categoria:"IDWST"},
    {habitacion:418, categoria:"IDWST", detalles:"Tiene un armario muy chico"},
    {habitacion:527, categoria:"IDWST", detalles:["Tiene la escaleda que sube al sexto por dentro de la habitación","Tiene una ventena muy pequeña al pulmon intermedio del hotel"]},
    {habitacion:427, categoria:"IDWST"},
    {habitacion:218, categoria:"IDWST"},

    {habitacion:104, categoria:"IDSST", departamento:true, detalles:["Se hace junto con la habitacion 103 el departemento B"]},
    {habitacion:519, id:4,  categoria:"IDSST", interna:true, vista:"Pulmon interno del Hotel", detalles:["Queda al lado del office de las mucamas"]},
    {habitacion:119, categoria:"IDSST", interna:true},
    {habitacion:219, categoria:"IDSST", interna:true},
    {habitacion:319, categoria:"IDSST", interna:true},
    {habitacion:419, categoria:"IDSST", interna:true},
    {habitacion:120, categoria:"IDSST", interna:true},
    {habitacion:123, categoria:"IDSST",interna:true,},
    {habitacion:124, categoria:"IDSST"},
    {habitacion:220, categoria:"IDSST", interna:true},
    {habitacion:420, categoria:"IDSST", interna:true},
    {habitacion:520, categoria:"IDSST", interna:true},
    {habitacion:523, categoria:"IDSST",interna:true, vista:"Al mar de contrafrente",},
    {habitacion:524, categoria:"IDSST",  vista:"Al mar de contrafrente", detalles:["Tiene la pared en diagonal, Vista al mar de contrafrente"]},
    {habitacion:423, categoria:"IDSST",interna:true, vista:"Al mar de contrafrente"},
    {habitacion:424, categoria:"IDSST", departamento:true, detalles:["Se hace departamento con 425"]},
    {habitacion:223, categoria:"IDSST",interna:true,},
    {habitacion:224, categoria:"IDSST"},
    {habitacion:323, categoria:"IDSST",interna:true,},
    {habitacion:324, categoria:"IDSST", departamento:true},
    {habitacion:407, categoria:"IDSST", vista:"Pulmon interno cerrado"},
    {habitacion:204, categoria:"IDSST"},

    {habitacion:103, categoria:"IDWSST", detalles:["Se hace junto con la habitacion 104 el departemento B"]},
    {habitacion:203, categoria:"IDWSST", detalles:["Junto a 204 se hace el departamento G"]},
    {habitacion:408, categoria:"IDWSST", interna:true, detalles:["Esta al lado de la oficina de la Gobernanta"]},
    {habitacion:308, categoria:"IDWSST"},
    {habitacion:320, categoria:"IDWSST", interna:true},

    {habitacion:112, id:3, convertible:true,   categoria:"IDVM", vista:"Frente del hotel", detalles:["Cuenta con dos sillones pequeños"]},
    {habitacion:114, categoria:"IDVM", interna:true, vista:"Frente del hotel"},
    {habitacion:212, convertible:true, categoria:"IDVM", vista:"Frente del hotel"},
    {habitacion:214, categoria:"IDVM", interna:true, vista:"Frente del hotel"},
    {habitacion:215, categoria:"IDVM", interna:true, vista:"Frente del hotel", detalles:["La habitacion cuenta con un pequeño pasillo donde se puede dejar el equipaje"]},
    {habitacion:411, categoria:"IDVM", convertible:true, vista:"Frente del hotel"},
    {habitacion:310, convertible:true, categoria:"IDVM", interna:false, vista:"Frente del hotel"},
    {habitacion:312, categoria:"IDVM", ducha:true, vista:"Frente del hotel"},
    {habitacion:314, categoria:"IDVM", interna:true, ducha:true, vista:"Frente del hotel"},
    {habitacion:412,  categoria:"IDVM", convertible:true, vista:"Frente del hotel"},
    {habitacion:414, categoria:"IDVM", interna:true, vista:"Frente del hotel"},
    {habitacion:415, categoria:"IDVM", interna:true, vista:"Frente del hotel", detalles:["La habitacion cuenta con un pequeño pasillo donde se puede dejar el equipaje","Tiene un sillonsito"]},

    {habitacion:410, categoria:"IDWM", convertible:true, vista:"Frente del hotel", interna:true},
    {habitacion:111, categoria:"IDWM", convertible:true, vista:"Frente del hotel"},
    {habitacion:115, categoria:"IDWM", interna:true, convertible:true, vista:"Frente del hotel"},
    {habitacion:311, categoria:"IDWM", convertible:true, vista:"Frente del hotel"},
    {habitacion:315, categoria:"IDWM", interna:true, vista:"Frente del hotel"},
    {habitacion:211, categoria:"IDWM", convertible:true, vista:"Frente del hotel"},

    {habitacion:122, categoria:"ITWS", vista:"Pulmon interno del Hotel", detalles:["Queda en frente del office de las mucamas"]},
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
    {habitacion:401,  categoria:"ITSTE", vista:"A pulmon interno del hotel", detalles:"Se ve muy escuetamente el mar desde la ventana"},
    {habitacion:405,  categoria:"ITSTE", vista:"A pulmon interno del hotel",},

    {habitacion:205,  categoria:"IDEP",},
    {habitacion:101,  categoria:"IDEP",},
    {habitacion:303,  categoria:"IDEP",},
    {habitacion:201,  categoria:"IDEP",},
    {habitacion:403,  categoria:"IDEP", vista:"Al mar de contrafrente", detalles:["Es el departamento K junto con la 404"]},
    {habitacion:105,  categoria:"IDEP",},

    {habitacion:110, categoria:"ISVM",vista:"Frente del hotel",detalles:["Tiene hidromasaje"]},
    {habitacion:210, categoria:"ISVM",vista:"Frente del hotel",detalles:["Tiene hidromasaje"]},
]

const ItemListContainer = () => {
    const { categoria } = useParams();
    const location = useLocation();

    
    let opciones=habitaciones.filter((el)=>el.categoria===categoria)
    
    const [btnContraFrente, setBtnContraFrente] = useState(false)
    
    const [btnDucha, setBtnDucha] = useState(false)
    
    const [btnConvertible, setBtnConvertible] = useState(false)
    
    const [btnInterna, setBtnInterna] = useState(false)

    const [btnDepartamento, setBtnDepartamento] = useState(false)
    
    const filtrarInterna=()=>{setBtnInterna(!btnInterna)}
    
    const filtrarDucha=()=>{setBtnDucha(!btnDucha)}
    
    const filtrarConvertible=()=>{setBtnConvertible(!btnConvertible)}
    
    const filtrarvistaContraFrente =()=>{setBtnContraFrente(!btnContraFrente)}
    
    const filtrarDepartamento =()=>{setBtnDepartamento(!btnDepartamento)}
    
    useEffect(() => {
   // Actualiza el estado de myState a false cada vez que cambia la ruta
   setBtnContraFrente(false);
   setBtnDucha(false);
   setBtnConvertible(false);
   setBtnInterna(false);
   setBtnDepartamento(false);
  }, [location.pathname]);
    
    
    if (btnDucha){opciones=opciones.filter((el)=>el.ducha === true)}
    
    if (btnContraFrente) {opciones = opciones.filter((el)=>el.vista == "Al mar de contrafrente")}
    
    if (btnInterna) { opciones = opciones.filter(habitacion => !habitacion.interna)}
    
    if (btnConvertible){opciones = opciones.filter((el)=>el.convertible === true)}

    if (btnDepartamento){opciones=opciones.filter(habitaciones=>habitaciones.departamento==true)}

  return (
    <>
    <div className={ categoria ==="ISTE" || categoria ==="ISTE" || categoria ==="ITSTE" || categoria ==="ISVM" || categoria==="IDEP" ? 'ItemListContenedor':'ItemListContainer'}>
      <div  className={categoria==="ISTE" || categoria==="ITSTE" || categoria==="IDEP" || categoria==="ISVM" ? 'invisible':'div-filtros'}>
        { categoria === "ITSU" || categoria === "ITWS" ?
        <FiltrosITSU filtrarvistaContraFrente={filtrarvistaContraFrente} />

        : categoria===  "IDWSST" || categoria===  "IDSST" || categoria==="IDST" || categoria=== "IDWST" ? 
        <FiltrosIDST filtrarConvertible={filtrarConvertible}
        filtrarvistaContraFrente={filtrarvistaContraFrente}
        filtrarInterna={filtrarInterna}
        filtrarDucha={filtrarDucha}
        filtrarDepartamento={filtrarDepartamento} />

        : categoria === "IDVM" || categoria === "IDWM" ? 
        <FiltrosIDVM  filtrarConvertible={filtrarConvertible}
        filtrarDucha={filtrarDucha}
        filtrarInterna={filtrarInterna}/>
        : categoria == "IDEP" ?
        <FiltrosIDEP />
        : <Ejemplo />
        }
      </div>
      
      <ItemList opciones={opciones}/>
    </div>
    </>
  )
}

export default ItemListContainer