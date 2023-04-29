import React, {useState} from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
    const [opcionesStd, setOpcionesStd] = useState(false)
    const [opcionesSup, setOpcionesSup] = useState(false)
    const [opcionesVM, setOpcionesVM] = useState(false)
    const [opcionesTriple, setOpcionesTriple]= useState(false)
    const [ opcionesSuite, setOpcionesSuite] = useState(false)
  
    const standard = () => {setOpcionesStd(true)}
    const standardOff = () => {setOpcionesStd(false)}
    const superior = () => {setOpcionesSup(true)}
    const superiorOff = () => {setOpcionesSup(false)}
    const vM = () => {setOpcionesVM(true)}
    const vMOff = () => {setOpcionesVM(false)}
    const triple = () => {setOpcionesTriple(true)}
    const tripleOff= () => {setOpcionesTriple(false)}
    const suite = () => {setOpcionesSuite(true)}
    const suiteOff = () => {setOpcionesSuite(false)}


    
  return (
    <>
      <div className='navbar up'>
        <Link  to ="/">
          <img className='logo' src="https://www.hoteliruna.com/wp-content/themes/hotel-iruna-2022/images/logo.png" />
        </Link>
          <div className='navbar-links'>
            <h6  onMouseMove={standard} onMouseOut={standardOff} className={opcionesStd ? 'navbar-hover' :"navbar-points"} >Standard</h6>
            <h6  onMouseMove={superior} onMouseOut={superiorOff} className={opcionesSup ? 'navbar-hover' :"navbar-points"} >Doble Superior</h6>
            <h6   onMouseMove={vM} onMouseOut={vMOff} className={opcionesVM ? 'navbar-hover' :"navbar-points"} >Vista al mar</h6>
            <h6   onMouseMove={triple} onMouseOut={tripleOff} className={opcionesTriple ? 'navbar-hover' :"navbar-points"} >Triple</h6>
            <h6   onMouseMove={suite} onMouseOut={suiteOff} className={opcionesSuite ? 'navbar-hover' :"navbar-points"} >Junior Suite</h6>
            <Link className='link' to ={`/categoria/${"IDEP"}`}>
              <h6 className="navbar-points">
                 Departamento </h6>
            </Link>
            <Link className='link' to ={`/categoria/${"ISVM"}`}>
              <h6 className="navbar-points" >Suite Vista al Mar</h6>
            </Link>
          </div>
      </div>
      {/* standard */}
      <div onMouseMove={standard} onMouseOut={standardOff} className={opcionesStd ? 'active'  : 'inactive'}>
        <div className='navbar-left opcion1'>
        <Link className='link' to ={`/categoria/${"IDST"}`}>
          <h6 className='navbar-pointer'> Standard Matrimonial</h6>
        </Link>
        <Link className='link' to ={`/categoria/${"IDWST"}`}>
          <h6 className='navbar-pointer'> Standard Doble Twin</h6>
        </Link>
        </div>
      </div>
      {/* Superior */}
      <div onMouseMove={superior} onMouseOut={superiorOff} className={opcionesSup ? 'active':'inactive'}>
        <div className='navbar-left opcion2'>
        <Link className='link' to ={`/categoria/${"IDSST"}`}>
          <h6 className='navbar-pointer'> Superior Matrimonial</h6>
        </Link>
        <Link className='link' to ={`/categoria/${"IDWSST"}`}>
          <h6 className='navbar-pointer'> Superior Doble Twin</h6>
          </Link>
        </div>
      </div>
      {/* VistaAlMar */}
      <div onMouseMove={vM} onMouseOut={vMOff} className={opcionesVM ? 'active':'inactive'}>
        <div className='navbar-links'>
        <Link className='link' to ={`/categoria/${"IDVM"}`}> 
          <h6 className='navbar-pointer'> Vista al mar Matrimonial</h6>
          </Link>
          <Link className='link' to ={`/categoria/${"IDWM"}`}> 
          <h6 className='navbar-pointer'> Vista al mar Doble Twin</h6>
          </Link>
        </div>
      </div>

       {/* Triple */}
       <div onMouseMove={triple} onMouseOut={tripleOff} className={opcionesTriple ? 'active':'inactive'}>
        <div className='navbar-links'>
          <Link className='link' to ={`/categoria/${"ITSU"}`}> 
            <h6 className='navbar-pointer'> Matrimonial mas cama</h6>
          </Link>
          <Link className='link' to ={`/categoria/${"ITWS"}`}> 
            <span className='navbar-pointer'> Triple Twin</span>
          </Link>
        </div>
      </div>


      {/* Junior Suite */}
      <div onMouseMove={suite} onMouseOut={suiteOff} className={opcionesSuite ? 'active':'inactive'}>
        <div className='navbar-links'>
        <Link className='link' to ={`/categoria/${"ISTE"}`}> 
          <h6 className='navbar-pointer'> Junior Suite matrimonial</h6>
        </Link>
        <Link className='link' to ={`/categoria/${"ITSTE"}`}> 
          <h6 className='navbar-pointer'> Junior Suite matrimonial mas cama</h6>
        </Link>
        </div>
      </div>
      
    </>

  )
}

export default NavBar