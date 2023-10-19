import React, { useContext,useState} from 'react';
import { ContextApp } from '../../context/Context';
import {Link, useNavigate} from 'react-router-dom'

const ContenedorInfoFechas = ({id,fecha}) => {

    const {mostrarInfo,setMostrarInfo} = useContext(ContextApp)

    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/elegfecha', {state: {id}});
        }, 1000); 
    };

    const mostrarId = (e) =>{
        e.preventDefault()
        console.log(id)
    }

    return (
            <>          
                <div onClick={handleCambioDeRuta} className= 'animated zoomIn contBtnFecha'>
                    <p>{fecha}</p>
                </div>
            </>
    )
}

export default ContenedorInfoFechas