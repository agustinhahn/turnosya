import React from 'react'
import BotonGral from '../components/BotonGral'

const Home = () => {
    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>TURNOS GO</h1>
            <BotonGral textoBoton="RESERVAR TURNO" />
            <BotonGral textoBoton="MODIFICAR RESERVA" />
        </div>
    )
}

export default Home