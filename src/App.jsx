import { Routes, Route} from "react-router-dom"
import './archivo.css'
import './App.css'
import './navbar.css'
import Prueba from './Components/Prueba'
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import BootstrapNavbar from "./Components/BootstrapNavbar"

function App() {
  

  return (
    <div className="App">


      < BootstrapNavbar />

      <Routes>
        <Route exact path="/" element={<Prueba/>}/>
        <Route exact path='/categoria/:categoria' element={<ItemListContainer/>} />
        <Route exact path="producto/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
     </Routes> 
    </div>
  )
}

export default App
