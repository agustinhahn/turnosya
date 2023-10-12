import React from 'react'

const BotonGral = ({textoBoton, precioServicio}) => {

    return (
        <div>
            <button className='animated zoomIn btn_gral'>
                    {textoBoton}
                    {precioServicio}
            </button>
        </div>
    )
}

export default BotonGral