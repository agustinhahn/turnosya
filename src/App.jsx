import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EleccionServicio from './pages/EleccionServicio'
import Context from './context/Context'
import EleccionFecha from './components/EleccionFecha'
import EleccionFecha2 from './components/EleccionFecha2'
function App() {

  return (
    <>
      <BrowserRouter>
        <Context>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/servicios' element={<EleccionServicio />} />
                <Route exact path='/fecha' element={<EleccionFecha />} />
                <Route exact path='/fecha2' element={<EleccionFecha2 />} />
              </Routes>
          </Context>
      </BrowserRouter>
    </>
  )
}

export default App
