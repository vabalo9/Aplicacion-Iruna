import React from 'react'
import Switch from './Switch';
import { useParams } from "react-router-dom";


const FiltrosIDST = ({filtrarInterna, filtrarDucha, filtrarDepartamento, filtrarvistaContraFrente}) => {
  const { categoria } = useParams();
  
  return (
    <>
    <div>
      <p className='indicador'>Filtros para aplicar</p>
      <div className={ 'filtros'} >
        <h5>Baño con ventilación</h5>
        <Switch id="switch-activo1" checked={false} onChange={filtrarInterna} />
      </div>
      <div className= {"filtros" }  >
        <h5>Habitaciones con ducha</h5>
        <Switch id="switch-ducha" checked={false} onChange={filtrarDucha} />
      </div>
      <div className= {'filtros'} >
            <h5>Vista contra frente al mar</h5>
            <Switch id="contra-frente" checked={false} onChange={filtrarvistaContraFrente} />
      </div>
      <div className= { "filtros"} >
        <h5>Habitaciones convertibles en departamento</h5>
        <Switch id="switch-departamento" checked={false} onChange={filtrarDepartamento} />
      </div>
    </div>

    <div className='padding'>
      <p className='indicador indicador-standard'>Detalles particulares:</p>
      <p className='indicador indicador-standard'>Se pueden hacer departamento:</p>
      <ul>
        <li className='item-detalles'>103 y 104</li>
        <li className='item-detalles'>203 y 204</li>
        <li className='item-detalles'>324 y 325</li>
        <li className='item-detalles'>424 y 425</li>
      </ul>
    </div>
    
  </>
  )
}

export default FiltrosIDST