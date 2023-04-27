import { Link } from 'react-router-dom'

const Item = ({id, habitacion, categoria}) => { 
  
  return (
    <>
    <div className='item' key={id}>
    <span className='item-habitacion'>Habitacion</span>
    <h3 className='item-nro-habitacion'>{habitacion}</h3>
    <h4 className='item-categoria'>Categoría: {categoria}</h4>
    <Link to={`/producto/${id}`}>
    <button className='item-btn'>
       Ver mas detalles
    </button>
    </Link>
    </div>

    
    </>
  )
}

export default Item