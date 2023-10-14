import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EleccionServicio from './pages/EleccionServicio'
import Context from './context/Context'
import EleccionFechaDemo from './pages/EleccionFechaDemo'
function App() {

  return (
    <>
      <BrowserRouter>
        <Context>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/servicios' element={<EleccionServicio />} />
                <Route exact path='/fecha3' element={<EleccionFechaDemo />} />
              </Routes>
          </Context>
      </BrowserRouter>
    </>
  )
}

export default App
