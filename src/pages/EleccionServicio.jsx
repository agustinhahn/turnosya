import {React, useState, useEffect} from 'react'
import BotonGral from '../components/BotonGral'
import {Link, useNavigate, useParams} from 'react-router-dom'
import ContenedorInfo from '../components/ContenedorInfo'
import DistribucionDatos from './DistribucionDatos'


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

    const tiposdemasajes = [
        {
            id: 1,
            servicio: "HAWAIANO",
            precio: 5000,
            info: "promueve el bienestar a través de una relajación profunda, previniendo el estrés, favoreciendo la movilización de todas las articulaciones y activando la linfa y la circulación sanguínea."

        },
        {
            id: 2,
            servicio: "RELAJANTE",
            precio: 10030,
            info: "consiste en la realización de maniobras superficiales en las que la intensidad de la presión es suave y el ritmo lento y reiterativo, de manera que al recibir un contacto repetido y constante, se pierde la sensación de dolor y los músculos se relajan."
        },
        {
            id: 3,
            servicio: "DESCONTRACTURANTE",
            precio: 222,
            info: "se utiliza para relajar la musculatura y disolver las contracturas que se producen por el estrés, las malas posturas, la falta de descanso o una vida demasiado sedentaria o sobre activa."
        },
    ]

    return (
        <div className={`containerApp ${salida ? 'salida' : ''}`}>
            <h1 className='animated zoomIn tituloh1'>ELEGI TU SERVICIO</h1>
            <DistribucionDatos tiposdemasajes={tiposdemasajes} />
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="VOLVER" />
            </Link>
        </div>
    )
}

export default EleccionServicio