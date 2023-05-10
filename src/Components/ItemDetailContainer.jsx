import React from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import habitaciones from '../../data.json';

let pulmon="vista al pulmon interinato de este hotel"



const ItemDetailContainer = () => {
    const { id } = useParams();
    const opciones=habitaciones.find((el)=>el.habitacion==id)
    

  return (
    <ItemDetail
    key={opciones.id}
    id={opciones.id}
    habitacion={opciones.habitacion}
    detalles={opciones.detalles}
    vista={opciones.vista}
    />
    
  )
}

export default ItemDetailContainer