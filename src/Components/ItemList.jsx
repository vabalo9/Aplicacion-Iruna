import React, {useState, useEffect} from 'react'
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemList = ({opciones}) => {
  const [titulo, setTitulo] = useState("")
  const { categoria } = useParams();
  useEffect(() => {
    if (categoria==="IDST") {setTitulo("Categoria Standard matrimonial")}
    else if (categoria==="IDWST") {setTitulo("Categoria doble twin standard")}
    else if (categoria==="IDSST") {setTitulo("Categoria Superior matrimonial")}
    else if (categoria==="IDWSST") {setTitulo("Categoria Superior doble twin")}
    else if (categoria==="IDVM") {setTitulo("Categoria matrimonial Vista al mar")}
    else if (categoria==="IDWM") {setTitulo("Categoria doble twin Vista al mar")}
    else if (categoria==="ITSU") {setTitulo("Categoria Superior mas cama")}
    else if (categoria==="ITWS") {setTitulo("Categoria Superior triple twin")}
    else if (categoria==="ISTE") {setTitulo("Categoria Junior Suite doble")}
    else if (categoria==="ITSTE") {setTitulo("Categoria Junior Suite triple")}
    else if (categoria==="IDEP") {setTitulo("Categoria Departamento")}
    else   { setTitulo("categoria Suite vista al mar")} 
   }, [categoria]);
  return (

<>
    <div>
        <h3 className="titulo-categoria">{titulo}</h3>
    <div className="container-products"> 
        {  opciones.map((prod)=>{
          return (
          <Item
          key={prod.habitacion}
          id={prod.habitacion}
          habitacion={prod.habitacion}
          categoria={prod.categoria}
          />
          )})  
        }
    </div>  
    </div>  
</>
  )
}

export default ItemList