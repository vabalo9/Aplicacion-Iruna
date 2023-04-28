import React from 'react'
import { useParams } from "react-router-dom";
import Switch from './Switch';

const FiltrosITSU = ({filtrarCategoria}) => {
  const { categoria } = useParams();


  return (
    <>
    <div className={categoria == "ITWS" ? 'div-triple' : "invisible" }>
      <h1 className='indicador'>Filtros para aplicar</h1>
      <div className= 'filtros margen' >
        <h2>Vista contra frente al mar</h2>
        <Switch id="contra-frente" checked={false} onChange={filtrarCategoria} />
          
      </div>
    </div>
    <p className={categoria == "ITSU" ? 'detalles-categoria' : "invisible" }>Ambas habitaciones tienen vista de contra frente al mar</p>
    </>
  )
}

export default FiltrosITSU