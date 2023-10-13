import React, { useContext, useState } from 'react';
import BotonReservar from '../components/BotonReservar'
import BotonInfo from './BotonInfo'
import { ContextApp } from '../context/Context';

const ContenedorInfo = ({id,servicio,precio,info}) => {

    const {mostrarInfo,setMostrarInfo} = useContext(ContextApp)

    return (
            <>          
                <div className= 'animated zoomIn contInfo'>
                    <p>{servicio}</p>
                    {
                        mostrarInfo ? (null) : (<><p>${precio}</p></>)
                    }
                    <BotonInfo id={id} info={info}/>
                    <BotonReservar />
                </div>
            </>
    )
}

export default ContenedorInfo