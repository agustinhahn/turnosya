import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EleccionServicio from './pages/EleccionServicio'
import EleccionDiaHora from './pages/EleccionDiaHora'
import Context from './context/Context'
import InfoServicio from './components/InfoServicio'

function App() {

  return (
    <>
      <BrowserRouter>
        <Context>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/servicios' element={<EleccionServicio />} />
                <Route exact path='/fecha' element={<EleccionDiaHora />} />
                <Route exact path='/info' element={<InfoServicio />} />
              </Routes>
          </Context>
      </BrowserRouter>
    </>
  )
}

export default App
