import React from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

let pulmon="vista al pulmon interinato de este hotel"

const habitaciones =[
    {habitacion:110, id:1, categoria:"ISVM",vista:"Frente del hotel",detalles:["Tiene hidromasaje"]},
    {habitacion:307, id:2,  categoria:"ISTE", vista:pulmon, detalles:["A diferencia de las otras Suites tiene la antesala es muy pequeña (no le entra otra cama)","Vvia peron", "No me digas que soy de otro pais", "Quiero llamar a Marcos"]},
    {habitacion:112, id:3,  categoria:"IDVM", vista:"Frente del hotel", detalles:["Cuenta con dos sillones pequeños"]},
    {habitacion:"519", id:4,  categoria:"IDSST", vista:"Pulmon interno del Hotel", detalles:["Queda al lado del office de las mucamas"]},
    {habitacion:520, id:5,  categoria:"IDWSST", vista:"Pulmon interno del Hotel", detalles:["Queda en frente del office de las mucamas"]},
    {habitacion:122, id:5,  categoria:"ITSU", vista:"Pulmon interno del Hotel", detalles:["Queda en frente del office de las mucamas"]},
    {habitacion:222, id:6,  categoria:"ITSU", vista:"Pulmon interno del Hotel", detalles:["Queda en frente del office de las mucamas"]},
    {habitacion:322, id:7,  categoria:"ITSU", vista:"Al mar de contrafrente", detalles:["Queda en frente del office de las mucamas"]},
    {habitacion:422, id:8,  categoria:"ITSU", vista:"Al mar de contrafrente", detalles:["Queda en frente del office de las mucamas"]},
]

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