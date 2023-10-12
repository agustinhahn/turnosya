import React from 'react'
import BotonReservar from '../components/BotonReservar'
import BotonInfo from './BotonInfo'

const ContenedorInfo = ({textoBoton, precioServicio}) => {
    return (
        <div className='animated zoomIn contInfo'>
            <p>{textoBoton}</p>
            <p>{precioServicio}</p>
            <BotonInfo />
            <BotonReservar />
        </div>
    )
}

export default ContenedorInfo