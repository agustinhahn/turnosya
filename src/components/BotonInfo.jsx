import React, { useState } from 'react';

const BotonInfo = () => {
    const [mostrarInfo, setMostrarInfo] = useState(false);

    const toggleInfo = () => {
        setMostrarInfo(!mostrarInfo);
    };

    const cerrarInfo = () => {
        setMostrarInfo(false);
    };

    return (
        <div>
            <button onClick={toggleInfo} className='btnInfo'>
                INFO
            </button>
            {mostrarInfo && (
                <div className="info-box">
                    <button onClick={cerrarInfo} className="close-button">X</button>
                    <p>Esta es la información que deseas mostrar.</p>
                </div>
            )}
        </div>
    );
}
export default BotonInfo