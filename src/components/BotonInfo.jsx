import React, { useContext, useState } from 'react';
import { ContextApp } from '../context/Context';

const BotonInfo = ({id,info}) => {
    const {mostrarInfo,setMostrarInfo} = useContext(ContextApp)

    const toggleInfo = () => {
        if (id === mostrarInfo) {
            setMostrarInfo(null); // Cierra el componente si ya está abierto
        } else {
            setMostrarInfo(id); // Abre el componente con el ID específico
        }
    };

    const cerrarInfo = () => {
        setMostrarInfo(false);
    };

    return (
        <div>
            {mostrarInfo === id ? (
                <div className="info-box">
                    <button onClick={cerrarInfo} className="close-button">X</button>
                    <p className='textInfo'>{info}</p>
                </div>
            )
        : (
            <button onClick={toggleInfo} className='btnInfo'>
                INFO
            </button>
        )}
        </div>
    );
}
export default BotonInfo