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
        <div className='filtros' >
          <h5>Baño con ventilación</h5>
          <Switch id="interna" checked={false} onChange={filtrarInterna} />
        </div>
        <div className='filtros' >
          <h5>{categoria === "IDVM" ? twin : matrimonial}</h5>
          <Switch id="convertible" checked={false} onChange={filtrarConvertible} />
        </div>
        <div className={categoria == "IDVM" ? "filtros" : "invisible"} >
          <h5>Baño reciclado (sin bañera)</h5>
          <Switch id="switch-ducha" checked={false} onChange={filtrarDucha} />
        </div>
        </div>
      <div className='particularidades'>
        <p className='indicador'>Detalles particulares:</p>
        <ul>
          <li className={categoria =="IDVM"?'item-detalles':"invisible"}>la linea '12 tiene dos sillones</li>
          <li className={categoria =="IDWM"?'item-detalles':"invisible"}>La 115 esta conectada con la 117</li>
          <li className={categoria =="IDWM"?'item-detalles':"invisible"}>La 315 esta conectada con la 317</li>
          <li className={categoria =="IDWM"?'item-detalles':"invisible"}>La 115 en la puerta tiene una "D"</li>
          <li className={categoria =="IDVM"?'item-detalles':"invisible"}>la 215 esta conectada con la 217</li>
        </ul>
      </div>
    
    
  </>
  )
}

export default FiltrosIDVM