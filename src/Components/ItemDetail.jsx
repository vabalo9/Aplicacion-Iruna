import React, {useState, useEffect} from 'react'

const ItemDetail = ({id, habitacion, detalles, vista} ) => {

  const [vistaMomentanea, setvistaMomentaneaistaMomentanea] = useState("No hay informacion sobre la vista")
  const [detallesMomentanea, setDetallesMomentanea] = useState([])

  useEffect(() => {
    if (vista) {setvistaMomentaneaistaMomentanea(vista)}
    if (detalles) {setDetallesMomentanea(detalles)}
   }, []);

  let pulmon="A pulmon interno del hotel"
  return (
    <>
    <div key={id}>
    <h2>Habitación:{habitacion}</h2>
    <h4>Vista:{vistaMomentanea}</h4>
    
    {detallesMomentanea.map((el)=>
      <li key={el}>{(el)}</li>
    )}
    </div>
    </>
  )
}

export default ItemDetail