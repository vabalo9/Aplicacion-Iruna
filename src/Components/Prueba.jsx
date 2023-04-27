import React from 'react'
const habitaciones =[
    {habitacion:110,categoria:"ISVM",vista:"Frente del hotel",detalles:["Tiene hidromasaje"]},
    {habitacion:307, categoria:"ISTE", vista:"A pulmon interno del hotel", detalles:["A diferencia de las otras Suites tiene la antesala es muy pequeña (no le entra otra cama)"]},
    {habitacion:112, categoria:"IDVM", vista:"Frente del hotel", detalles:["Cuenta con dos sillones pequeños"]},
    {habitacion:519, categoria:"IDSST", vista:"Pulmon interno del Hotel", detalles:["Queda al lado del office de las mucamas"]},
    {habitacion:520, categoria:"IDWSST", vista:"Pulmon interno del Hotel", detalles:["Queda en frente del office de las mucamas"]},
]

const detalles=habitaciones.map((el)=>el)

const Prueba = () => {
  return (
    <div>Prueba</div>
  )
}

export default Prueba