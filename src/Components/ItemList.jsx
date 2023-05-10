import React, { useState, useEffect } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';

const ItemList = ({ opciones }) => {
  const [titulo, setTitulo] = useState('');
  const { categoria } = useParams();
  
  useEffect(() => {
    if (categoria === 'IDST') {
      setTitulo('Categoria Standard matrimonial');
    } else if (categoria === 'IDWST') {
      setTitulo('Categoria doble twin standard');
    } else if (categoria === 'IDSST') {
      setTitulo('Categoria Superior matrimonial');
    } else if (categoria === 'IDWSST') {
      setTitulo('Categoria Superior doble twin');
    } else if (categoria === 'IDVM') {
      setTitulo('Categoria matrimonial Vista al mar');
    } else if (categoria === 'IDWM') {
      setTitulo('Categoria doble twin Vista al mar');
    } else if (categoria === 'ITSU') {
      setTitulo('Categoria Superior mas cama');
    } else if (categoria === 'ITWS') {
      setTitulo('Categoria Superior triple twin');
    } else if (categoria === 'ISTE') {
      setTitulo('Categoria Junior Suite doble');
    } else if (categoria === 'ITSTE') {
      setTitulo('Categoria Junior Suite triple');
    } else if (categoria === 'IDEP') {
      setTitulo('Categoria Departamento');
    } else {
      setTitulo('Categoria Suite vista al mar');
    }
  }, [categoria]);

  return (
    <>
      <div className='vidriera'>
        <h3 className="titulo-categoria">{titulo}</h3>
        {opciones.length > 0 ? (
          <div className="container-products">
            {opciones.map((prod) => (
              <Item
                key={prod.habitacion}
                id={prod.habitacion}
                habitacion={prod.habitacion}
                categoria={prod.categoria}
                opciones={opciones}
              />
            ))}
          </div>
            ) : (
          
          
          
            <div className='arreglo-vacio'>
              <h4 className='arreglo-titulo'>No existen habitaciones con todos los filtros aplicados</h4>
              <div className='div-filtro-imagenes'>
                <img className='filtro-imagen' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/82471672.jpg?k=095b3828a7d14cdc63a7d603e780faeae960d82ee350a2df777a92392330229c&o=&hp=1" /> 
                <img className='filtro-imagen' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/21/89/218941_v8.jpeg" />
                <img className='filtro-imagen' src="http://iruna.hotels-argentina.net/data/Pics/OriginalPhoto/3179/317902/317902817/iruna-hotel-mar-del-plata-pic-25.JPEG" />
              </div>
            </div>
          
          
        )}
      </div>
    </>
  );
};

export default ItemList;
