import React, { useContext,useState} from 'react';
import BotonReservar from '../BotonReservar'
import BotonInfo from '../BotonInfo'
import { ContextApp } from '../../context/Context';
import {Link, useNavigate} from 'react-router-dom'

const ContenedorInfo = ({id,servicio,precio,info}) => {

    const {mostrarInfo,setMostrarInfo} = useContext(ContextApp)

    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/fecha2');
        }, 1000); 
    };

    return (
            <>          
                <div className= 'animated zoomIn contInfo'>
                    <p>{servicio}</p>
                    {
                        mostrarInfo ? (null) : (<><p>${precio}</p></>)
                    }
                    <BotonInfo id={id} info={info}/>
                    <Link onClick={handleCambioDeRuta}>
                        <BotonReservar />
                    </Link>
                </div>
            </>
    )
}

export default ContenedorInfo