import React from 'react'
import Switch from './Switch';
import { useParams } from "react-router-dom";


const FiltrosIDST = ({filtrarInterna, filtrarDucha, filtrarDepartamento, filtrarvistaContraFrente}) => {
  const { categoria } = useParams();
  
  return (
    <>
    <div>
      <p className='indicador'>Filtros para aplicar</p>
      <div className= {categoria =="IDST" || categoria == "IDWSST" ? "invisible":"filtros"} >
        <h2>Habitaciones convertibles en departamento</h2>
        <Switch id="switch-departamento" checked={false} onChange={filtrarDepartamento} />
      </div>
      <div className={categoria=== "IDWST" ? "invisible" : 'filtros'} >
        <h2>Baño con ventilación</h2>
        <Switch id="switch-activo1" checked={false} onChange={filtrarInterna} />
      </div>
      <div className= {categoria=="IDST" || categoria=== "IDWST" ? "filtros" : "invisible"}  >
        <h2>Habitaciones con ducha</h2>
        <Switch id="switch-ducha" checked={false} onChange={filtrarDucha} />
      </div>
      <div className= {categoria =="IDST" || categoria == "IDWSST" ? "invisible":'filtros margen'} >
            <h2>Vista contra frente al mar</h2>
            <Switch id="contra-frente" checked={false} onChange={filtrarvistaContraFrente} />
      </div>
    </div>
    
  </>
  )
}

export default FiltrosIDST