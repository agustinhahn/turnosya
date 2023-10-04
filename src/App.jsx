import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EleccionServicio from './pages/EleccionServicio'
import EleccionDiaHora from './pages/EleccionDiaHora'
import CalendarioSemana from './components/CalendarioSemana'
import Context from './context/Context'
import ItemListContainer from './components/ItemListContainer'
import CalendarDay from './components/CalendarioDia'

function App() {

  return (
    <>
      <BrowserRouter>
        <Context>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/servicios' element={<EleccionServicio />} />
                <Route exact path='/fecha' element={<EleccionDiaHora />} />
                <Route exact path='/calendar' element={<ItemListContainer />} />
                <Route exact path='/calendarweek' element={<CalendarioSemana />} />
                <Route exact path='/calendarday' element={<CalendarDay />} />
              </Routes>
          </Context>
      </BrowserRouter>
    </>
  )
}

export default App
