import React from 'react'
import {Link} from "react-router-dom"

const BootstrapNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Link  to ="/"><img className='logo' src="https://www.hoteliruna.com/wp-content/themes/hotel-iruna-2022/images/logo.png" /></Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="encabezado collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        
        <li className="nav-item dropdown navbar-dark">
          <a className="nav-link navbar-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Standard
          </a>
          <ul className="dropdown-menu navbar-dark ">
            <li>
              <a className="dropdown-item navbar-dark" href="#"><Link className="nav-link navbar-dark" to ={`/categoria/${"IDST"}`}>
                 Standard Matrimonial
                </Link>
              </a>
        </li>
            <li><a className="dropdown-item navbar-dark" href="#"><Link className="nav-link navbar-dark" to ={`/categoria/${"IDWST"}`}>
           Standard Doble Twin
        </Link></a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Superior
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" ><Link className="nav-link navbar-dark" to ={`/categoria/${"IDSST"}`}>Superior Matrimonial</Link></a></li>
            <li><a className="dropdown-item"> <Link className="nav-link navbar-dark" to ={`/categoria/${"ITSU"}`}>Superior matrimonial mas cama</Link></a></li>
            <li><a className="dropdown-item" > <Link className="nav-link navbar-dark" to ={`/categoria/${"ITWS"}`}>Triple twin superior</Link></a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vista al Mar
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item"> <Link className="nav-link navbar-dark" to ={`/categoria/${"IDVM"}`}>Vista al mar Matrimonial</Link></a></li>
            <li><a className="dropdown-item"> <Link className="nav-link navbar-dark" to ={`/categoria/${"IDWM"}`}>  Vista al mar Doble Twin</Link>
        </a></li>
          </ul>
        </li>
        
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Junior Suite
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item"> <Link className="nav-link navbar-dark" to ={`/categoria/${"ISTE"}`}>Junior Suite</Link></a></li>
            <li><a className="dropdown-item"> <Link className="nav-link navbar-dark" to ={`/categoria/${"ITSTE"}`}> Triple Junior Suite</Link></a></li>
          </ul>
        </li>
        
        <li  className="nav-item">
          <a className="nav-link active" aria-current="page"> <Link  className="enlace" to={`/categoria/${"IDEP"}`}>Departamento</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"><Link className=' enlace' to={`/categoria/${"ISVM"}`}>Suite Vista al mar</Link></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default BootstrapNavbar