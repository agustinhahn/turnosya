import {React, useState, useEffect} from 'react'
import BotonGral from '../components/BotonGral'
import {Link, useNavigate} from 'react-router-dom'


const Home = () => {

    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    const handleCambioDeRuta = (e) => {
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
            <h1 className='animated zoomIn tituloh1'>TURNOS GO</h1>
            <Link to='/servicios' onClick={handleCambioDeRuta}>
                <BotonGral textoBoton="RESERVAR TURNO" />
            </Link>
            <BotonGral textoBoton="MODIFICAR RESERVA" />
        </div>
    )
}

export default Home