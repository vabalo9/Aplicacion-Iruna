import React from 'react'
import { useParams } from "react-router-dom";
import Switch from './Switch';

const FiltrosIDVM = ({filtrarConvertible, filtrarDucha, filtrarInterna}) => {
  const { categoria } = useParams();
  let twin="Convertible en doble twin"
  let matrimonial="Convertible en matrimonial"
  return (
    <>
    
      <div>
        <p className='indicador'>Filtros para aplicar</p>
        <div className={categoria == "IDVM" ? "filtros" : "invisible"} >
          <h2>Baño reciclado (sin bañera)</h2>
          <Switch id="switch-ducha" checked={false} onChange={filtrarDucha} />
        </div>
        <div className='filtros' >
          <h2>{categoria === "IDVM" ? twin : matrimonial}</h2>
          <Switch id="convertible" checked={false} onChange={filtrarConvertible} />
        </div>
        <div className='filtros' >
          <h2>Baño con ventilación</h2>
          <Switch id="interna" checked={false} onChange={filtrarInterna} />
        </div>
        </div>
      <div>
        <p className='indicador'>Detalles particulares:</p>
        <ul>
          <li className={categoria =="IDVM"?'item-detalles':"invisible"}>la 215 esta conectada con la 217</li>
          <li className={categoria =="IDWM"?'item-detalles':"invisible"}>La 115 esta conectada con la 117</li>
          <li className={categoria =="IDVM"?'item-detalles':"invisible"}>la linea '12 tiene dos sillones</li>
        </ul>
      </div>
    
    
  </>
  )
}

export default FiltrosIDVM