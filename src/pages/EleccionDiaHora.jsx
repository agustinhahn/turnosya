import {React, useState, useEffect} from 'react'
import BotonGral from '../components/BotonGral'
import {Link, useNavigate} from 'react-router-dom'

const EleccionDiaHora = () => {

    
    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    //ESPERANDO FINALIZAR CALENDARIO PARA APLICAR LOGICA
    // const handleCambioDeRuta = (e) => {
    //     e.preventDefault(); // Evitar la redirección predeterminada
    //     setSalida(true);

    //     setTimeout(() => {
    //         setSalida(false);
    //         // Después de completar la transición, redirigir a la nueva ruta
    //         history('/fecha');
    //     }, 1000); 
    // };

    const handleVolver = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/servicios');
        }, 1000); 
    };

    return (
        <div className={`containerApp ${salida ? 'salida' : ''}`}>
            <h1 className='animated zoomIn tituloh1'>FECHA Y HORA DEL TURNO</h1>
            <BotonGral textoBoton="HOY" />
            <BotonGral textoBoton="ESTA SEMANA" />
            <BotonGral textoBoton="ESTE MES" />
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="VOLVER" />
            </Link>
        </div>
    )
}

export default EleccionDiaHora