import React from 'react'
import Switch from './Switch';
import { useParams } from "react-router-dom";


const FiltrosIDST = ({filtrarInterna, filtrarDucha, filtrarDepartamento, filtrarvistaContraFrente}) => {
  const { categoria } = useParams();
  
  return (
    <>
    <div>
      <p className='indicador'>Filtros para aplicar</p>
      <div className={categoria=== "IDWST" ? "invisible" : 'filtros'} >
        <h5>Baño con ventilación</h5>
        <Switch id="switch-activo1" checked={false} onChange={filtrarInterna} />
      </div>
      <div className= {categoria=="IDST" || categoria=== "IDWST" ? "filtros" : "invisible"}  >
        <h5>Habitaciones con ducha</h5>
        <Switch id="switch-ducha" checked={false} onChange={filtrarDucha} />
      </div>
      <div className= {categoria =="IDST" || categoria == "IDWSST" ? "invisible":'filtros margen'} >
            <h5>Vista contra frente al mar</h5>
            <Switch id="contra-frente" checked={false} onChange={filtrarvistaContraFrente} />
      </div>
      <div className= {categoria =="IDST" || categoria == "IDWSST" ? "invisible":"filtros"} >
        <h5>Habitaciones convertibles en departamento</h5>
        <Switch id="switch-departamento" checked={false} onChange={filtrarDepartamento} />
      </div>
    </div>
    
  </>
  )
}

export default FiltrosIDST