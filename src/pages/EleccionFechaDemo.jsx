import {React, useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import BotonGral from '../components/BotonGral'
import ContenedorFechas from '../components/ContenedorFechas';

const EleccionFechaDemo = () => {

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


    const fechaActual = new Date()

    const semana = []

    for(let i=0; i<7; i++){
        const nuevaFecha = new Date(fechaActual);
        nuevaFecha.setDate(fechaActual.getDate() + i);
        semana.push(nuevaFecha)
    }

    semana.forEach((dia, index) => {
        console.log(`Dia ${index +1}: ${dia.toDateString()}`)
    });


    const dia1 = fechaActual
    const dia2 = (fechaActual.setDate(fechaActual.getDate() + 1))
    const dia3 = fechaActual.toLocaleDateString('es-ES')
    const dia4 = fechaActual.toLocaleDateString('es-ES')
    const dia5 = fechaActual.toLocaleDateString('es-ES')

    const fechaDisponible = [
        {
            id: 1,
            fecha : dia1.toLocaleDateString('es-ES')
        },
        {
            id: 2,
            fecha : dia2
        },
        {
            id: 3,
            fecha : dia3
        },
        {
            id: 4,
            fecha : dia4
        },
        {
            id: 5,
            fecha : dia5
        }
    ]

    

    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>ELEGI FECHA</h1>
            <div className='containerFechas'>
                <ContenedorFechas fechaDisponible={fechaDisponible} />
            </div>
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="VOLVER" />
            </Link>
        </div>
    )
}

export default EleccionFechaDemo