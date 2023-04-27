import React from 'react'
import Item from "./Item";

const ItemList = ({opciones}) => {
  


  return (

<>
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
</>
  )
}

export default ItemList