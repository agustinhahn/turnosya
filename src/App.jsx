import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EleccionServicio from './pages/EleccionServicio'
import EleccionDiaHora from './pages/EleccionDiaHora'
import CalendarioMes from './components/CalendarioMes'
import CalendarioSemana from './components/CalendarioSemana'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/servicios' element={<EleccionServicio />} />
            <Route exact path='/fecha' element={<EleccionDiaHora />} />
            <Route exact path='/calendar' element={<CalendarioMes />} />
            <Route exact path='/calendarweek' element={<CalendarioSemana />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
