import React from 'react'
import { useParams } from "react-router-dom";

const FiltrosIDVM = ({filtrarConvertible, filtrarDucha, filtrarSillon, filtrarInterna,filtrarConectadas}) => {
  const { categoria } = useParams();
  let twin="Se puede convertir en doble twin"
  let matrimonial="Se puede convertir en matrimonial"
  return (
    <>
    <p className='indicador'>Muestra únicamente las opciones la caracteristica mencionada</p>
    <div className={categoria == "IDVM" ? "filtros" : "invisible"} >
      <h2>Baño reciclado (sin bañera)</h2>
      <div className='boton'>
        <input type="checkbox" onClick={filtrarDucha} id='btn-switch'/>
        <label className='lbl-switch' htmlFor="btn-switch"></label>
      </div>
    </div>
    <div className='filtros' >
      <h2>{categoria === "IDVM" ? twin : matrimonial}</h2>
      <div className='boton'>
        <input type="checkbox"  onClick={filtrarConvertible} id='btn-switch2'/>
        <label className='lbl-switch' htmlFor="btn-switch2"></label>
      </div>
    </div>
    <div className={categoria == "IDVM" ? "filtros" : "invisible"} >
      <h2>Tiene sillones</h2>
      <div className='boton'>
        <input type="checkbox" onClick={filtrarSillon} id='btn-switch3'/>
        <label className='lbl-switch' htmlFor="btn-switch3"></label>
      </div>
    </div>
    <p className='indicador'>Descarta las opciones que tienen la caracteristica mencionada</p>
    <div className='filtros' >
      <h2>Baño interno</h2>
      <div className='boton'>
        <input type="checkbox" onClick={filtrarInterna} id='btn-switch-positivo'/>
        <label className='lbl-switch-positivo' htmlFor="btn-switch-positivo"></label>
      </div>
    </div>
    <div className='filtros' >
    <h2>Se conecta con la '17</h2>
      <div className='boton'>
        <input type="checkbox" onClick={filtrarConectadas} id='btn-switch-positivo1'/>
        <label className='lbl-switch-positivo1' htmlFor="btn-switch-positivo1"></label>
      </div>
    </div>
    
  </>
  )
}

export default FiltrosIDVM