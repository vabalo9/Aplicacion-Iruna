import React from 'react'
import Switch from './Switch';

const FiltrosIDST = ({filtrarInterna}) => {
  
  return (
    <>
    <p className='indicador'>Descarta las opciones que tienen la caracteristica mencionada</p>
    <div className='filtros' >
      <h2>Baño interno</h2>
      <Switch id="switch-activo1" checked={true} onChange={filtrarInterna} />
    </div>
    
  </>
  )
}

export default FiltrosIDST