const ItemDetail = ({id, habitacion, detalles, vista} ) => {
    
  let pulmon="A pulmon interno del hotel"
  return (
    <>
    <div key={id}>
    <h2>Habitación:{habitacion}</h2>
    <h4>Vista:{vista}</h4>
    
    {detalles.map((el)=>
      <li key={el}>{(el)}</li>
    )}
    </div>
    </>
  )
}

export default ItemDetail