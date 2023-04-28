import React from 'react'
import { useParams } from "react-router-dom";
import Switch from './Switch';

const FiltrosIDVM = ({filtrarConvertible, filtrarDucha, filtrarSillon, filtrarInterna,filtrarConectadas}) => {
  const { categoria } = useParams();
  let twin="Se puede convertir en doble twin"
  let matrimonial="Se puede convertir en matrimonial"
  return (
    <>
    <p className='indicador'>Muestra únicamente las opciones la caracteristica mencionada</p>
    <div className={categoria == "IDVM" ? "filtros" : "invisible"} >
      <h2>Baño reciclado (sin bañera)</h2>
      <Switch id="switch-ducha" checked={false} onChange={filtrarDucha} />
    </div>
    <div className='filtros' >
      <h2>{categoria === "IDVM" ? twin : matrimonial}</h2>
      <Switch id="convertible" checked={false} onChange={filtrarConvertible} />
    </div>
    <div className={categoria == "IDVM" ? "filtros" : "invisible"} >
      <h2>Tiene sillones</h2>
      <Switch id="sillones" checked={false} onChange={filtrarSillon} />
    </div>
    <p className='indicador'>Descarta las opciones que tienen la caracteristica mencionada</p>
    <div className='filtros' >
      <h2>Baño interno</h2>
      <Switch id="interna" checked={true} onChange={filtrarInterna} />
    </div>
    <div className='filtros' >
      <h2>Se conecta con la '17</h2>
      <Switch id="conectadas" checked={true} onChange={filtrarConectadas} />
    </div>
    
  </>
  )
}

export default FiltrosIDVM