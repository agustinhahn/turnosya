import React, { useContext, useState } from 'react';
import { ContextApp } from '../context/Context';
import EleccionDiaHora from './componentes_Fecha/EleccionDiaHora';


const BotonReservar = () => {
    const {mostrarInfo,setMostrarInfo} = useContext(ContextApp)

    return (
        
        <div>
            {
                mostrarInfo ? (null) : (
                    <>
                        <button className='btnReserva'>
                            RESERVAR
                        </button>
                        
                    </>
                )
            }
        </div>
    )
}

export default BotonReservar