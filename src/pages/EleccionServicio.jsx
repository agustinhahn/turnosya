import {React, useState, useEffect} from 'react'
import BotonGral from '../components/BotonGral'
import {Link, useNavigate} from 'react-router-dom'

const EleccionServicio = () => {

    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/fecha');
        }, 1000); 
    };

    const handleVolver = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/');
        }, 1000); 
    };

    return (
        <div className={`containerApp ${salida ? 'salida' : ''}`}>
            <h1 className='animated zoomIn tituloh1'>ELEGI TU SERVICIO</h1>
            <Link to='/fecha' onClick={handleCambioDeRuta}>
                <BotonGral textoBoton="MASAJE HAWAIANO" />
            </Link>
            <Link to='/fecha' onClick={handleCambioDeRuta}>
                <BotonGral textoBoton="MASAJE RELAJANTE" />
            </Link>
            <Link to='/fecha' onClick={handleCambioDeRuta}>
                <BotonGral textoBoton="MASAJE DESCONTRACTURANTE" />
            </Link>
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="VOLVER" />
            </Link>
        </div>
    )
}

export default EleccionServicio