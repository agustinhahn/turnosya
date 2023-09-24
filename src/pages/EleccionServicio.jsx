import React from 'react'
import BotonGral from '../components/BotonGral'

const EleccionServicio = () => {
    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>ELEGI TU SERVICIO</h1>
            <BotonGral textoBoton="MASAJE HAWAIANO" />
            <BotonGral textoBoton="MASAJE RELAJANTE" />
            <BotonGral textoBoton="MASAJE DESCONTRACTURANTE" />
        </div>
    )
}

export default EleccionServicio