import {React, useState, useEffect} from 'react'
import BotonGral from '../BotonGral'
import {Link, useNavigate} from 'react-router-dom'
import DistribucionDatosFecha from './DistribucionDatosFecha';

const EleccionDiaHora = () => {

    
    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/elegfecha');
        }, 1000); 
    };

    const handleVolver = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/servicios');
        }, 1000); 
    };

    const fechasDisponibles = [{
        id: 1,
        fecha: "HOY"
    },
    {
        id:2,
        fecha: "EN LA SEMANA"
    },
    {
        id:3,
        fecha: "EN EL MES"
    }
]


    return (
        <div className={`containerApp ${salida ? 'salida' : ''}`}>
            <h1 className='animated zoomIn tituloh1'>FECHA Y HORA</h1>
            <DistribucionDatosFecha fechas = {fechasDisponibles} />
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="VOLVER" />
            </Link>
            {/* <Link to='/' onClick={handleCambioDeRuta}>
                <BotonGral textoBoton="HOY"/>
            </Link>
            <BotonGral textoBoton="EN LA SEMANA" />
            <BotonGral textoBoton="EN EL MES" />
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="VOLVER" />
            </Link> */}
        </div>
    )
}

export default EleccionDiaHora