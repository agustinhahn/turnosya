import React from 'react'
import BotonGral from '../components/BotonGral'

const EleccionDiaHora = () => {
    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>FECHA Y HORA DEL TURNO</h1>
            <BotonGral textoBoton="HOY" />
            <BotonGral textoBoton="ESTA SEMANA" />
            <BotonGral textoBoton="ESTE MES" />
        </div>
    )
}

export default EleccionDiaHora