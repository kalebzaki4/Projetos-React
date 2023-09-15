import SobreMim from "./Paginas/SobreMim"
import Inicio from "./Paginas/inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Pagiina Não ncontrada</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
