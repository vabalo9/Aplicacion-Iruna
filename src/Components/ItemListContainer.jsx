import React, {useState, useEffect} from 'react'
import { useParams, useLocation } from "react-router-dom";
import ItemList from './ItemList';
import FiltrosITSU from './FiltrosITSU';
import FiltrosIDVM from './FiltrosIDVM';
import Ejemplo from './Ejemplo';
import FiltrosIDST from './FiltrosIDST';
import FiltrosIDEP from './FiltrosIDEP';
import FiltrosIDSST from './FiltrosIDSST';
import habitaciones from '../../data.json';
import FiltrosIste from './FiltrosIste';

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
    <div className={categoria ==="ISTE" || categoria ==="ISVM"  ? 'ItemListContenedor':'ItemListContainer'}>
      <div  className={categoria==="ISTE"  || categoria==="ISVM" ? 'invisible':'div-filtros'}>
        { categoria === "ITSU" || categoria === "ISTE" || categoria === "ITWS" ?
        <FiltrosITSU filtrarvistaContraFrente={filtrarvistaContraFrente} />

        :categoria==="IDST" || categoria=== "IDWST" ? 
        <FiltrosIDST filtrarConvertible={filtrarConvertible}
        filtrarvistaContraFrente={filtrarvistaContraFrente}
        filtrarInterna={filtrarInterna}
        filtrarDucha={filtrarDucha}
        filtrarDepartamento={filtrarDepartamento} />

        :categoria==="IDSST"  ? 
        <FiltrosIDSST />

        : categoria === "IDVM" || categoria === "IDWM" ? 
        <FiltrosIDVM  filtrarConvertible={filtrarConvertible}
        filtrarDucha={filtrarDucha}
        filtrarInterna={filtrarInterna}/>
        : categoria == "IDEP" ?
        <FiltrosIDEP />
        : categoria == "ITSTE" ?
        <FiltrosIste />
        : <Ejemplo />
        }
      </div>
      
      <ItemList opciones={opciones}/>
    </div>
    </>
  )
}

export default ItemListContainer