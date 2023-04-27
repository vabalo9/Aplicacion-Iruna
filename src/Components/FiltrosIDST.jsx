import React from 'react'

const FiltrosIDST = ({filtrarInterna}) => {
  return (
    <>
    <p className='indicador'>Descarta las opciones que tienen la caracteristica mencionada</p>
    <div className='filtros' >
      <h2>Baño interno</h2>
      <div className='boton'>
        <input type="checkbox" onClick={filtrarInterna} id='btn-switch-positivo'/>
        <label className='lbl-switch-positivo' htmlFor="btn-switch-positivo"></label>
      </div>
    </div>
    
  </>
  )
}

export default FiltrosIDST