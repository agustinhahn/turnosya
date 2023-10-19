import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EleccionServicio from './components/componentes_servicios/EleccionServicio'
import Context from './context/Context'
import EleccionFechaDemo from './components/componentes_Fecha/EleccionFechaDemo'
import EleccionDiaHora from './components/componentes_Fecha/EleccionDiaHora'
function App() {

  return (
    <>
      <BrowserRouter>
        <Context>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/servicios' element={<EleccionServicio />} />
                <Route exact path='/elegfecha' element={<EleccionFechaDemo />} />
                <Route exact path='/fecha2' element={<EleccionDiaHora />} />
              </Routes>
          </Context>
      </BrowserRouter>
    </>
  )
}

export default App
