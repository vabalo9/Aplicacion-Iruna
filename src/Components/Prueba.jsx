import React from 'react'




const Prueba = () => {
  return (
    <>
    <div className='welcome'>
      <h1 className='titulo-bienvenida'>Bienvenido al room asistance del Hotel Iruña </h1>

      <h4 className='titulo-indicativo'>Por favor en el menú superior indique la categoría a visualizar</h4>

        <div className='imagenes-principal'>

          <img className='imagen-itemDetail1' src="https://cdn.myportfolio.com/54edfd4d5ca547f9f270b64acc5645bd/26562d0ead773d6c949ca014_rw_1200.png?h=7446b7eac89ea7357499cd2d05449f80" />
          <div className='imagenes'>
            <img className='imagen-itemDetail' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/82471672.jpg?k=095b3828a7d14cdc63a7d603e780faeae960d82ee350a2df777a92392330229c&o=&hp=1" /> 
            <img className='imagen-itemDetail' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/21/89/218941_v8.jpeg" />
            <img className='imagen-itemDetail' src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/30/02/300215076.jpeg" />
            {/* <img className='imagen-itemDetail' src="../../media/imagen-3.jpg" /> */}
          </div>
        </div>
    </div>
    </>
  )
}

export default Prueba