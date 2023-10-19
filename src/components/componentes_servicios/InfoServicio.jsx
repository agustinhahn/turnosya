import React, { useState } from 'react';

function TuComponente() {
    const [mostrarInfo, setMostrarInfo] = useState(false);

    const cerrarInfo = () => {
        setMostrarInfo(false);
    };

    return (
        <div>
                <div className="info-box">
                    <button onClick={cerrarInfo} className="close-button">X</button>
                    <p>Esta es la información que deseas mostrar.</p>
                </div>
        </div>
    );
}

export default TuComponente;
