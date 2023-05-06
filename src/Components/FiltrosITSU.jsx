import React from 'react'
import { useParams } from "react-router-dom";
import Switch from './Switch';

const FiltrosITSU = ({filtrarvistaContraFrente}) => {
  const { categoria } = useParams();


  return (
    <>
    <div>
      <div className={categoria == "ITWS" ? 'div-triple' : "invisible" }>
        <h1 className='indicador'>Filtros para aplicar</h1>
        <div className= 'filtros margen' >
          <h5>Vista contra frente al mar</h5>
          <Switch id="contra-frente" checked={false} onChange={filtrarvistaContraFrente} />

        </div>
      </div>
      <div className={categoria == "ITSU" ? 'padding' : "invisible" }>
          <p className='indicador'>Detalles particulares:</p>
          <ul>
            <li className='item-detalles'>Vista: al mar de contra frente</li>
          </ul>
      </div>
    </div>
    
    </>
  )
}

export default FiltrosITSU