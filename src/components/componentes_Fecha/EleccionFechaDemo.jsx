import {React, useState, useEffect} from 'react'
import {Link, useNavigate, useParams,useLocation} from 'react-router-dom'
import BotonGral from '../BotonGral'
import ContenedorFechas from './ContenedorFechas';

const EleccionFechaDemo = () => {


    const location = useLocation();
    const {id} = location.state


    console.log("Hola desde eleccionfechademo")
    console.log(id)

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

    const fechaActual = new Date() //aqui capturo la fecha actual con toda la informacion

    const horarios = []

    const hora = fechaActual.getHours()

    for(let i=0; i<=(23 - hora); i++){
        const idHora = 0 + i; //id unico para cada objeto
        const nuevaHora = hora +1  + i
        const horaObjeto = `{"id":${idHora}, "hora":"${nuevaHora}"}` //se prepara para ser objeto
        const horaObjetoJson = JSON.parse(horaObjeto) 
        horarios.push(horaObjetoJson)
    }

    /*PROCESO PARA SABER CUANTOS DIAS TIENE EL MES EN CURSO.*/
    const fechaMes = new Date() //aqui capturo fecha acual con toda la info
    fechaMes.setDate(1) //establezco que es el dia 1
    fechaMes.setMonth(fechaMes.getMonth()+ 1) //le sumo un mes
    fechaMes.setDate(fechaMes.getDate()-1) // le resto un dia
    const diasMesCurso = fechaMes.getDate() //me lleva al ultimo dia de el mes actual
    const diaActual = fechaActual.getDate() //capturo solo el dia actual para poder restarlo

    const mes = []

    for(let i=0; i<=(diasMesCurso - diaActual); i++){
        const idFecha = 0 + i; //id unico para cada objeto
        const nuevaFecha = new Date(fechaActual) //creacion de fecha unica
        nuevaFecha.setDate(fechaActual.getDate() + i); //se suma un dia tras cada iteracion
        const resumenNuevaFecha = nuevaFecha.toLocaleDateString('es-ES') //se pasa a string resumido
        const fechaObjeto = `{"id":${idFecha}, "fecha":"${resumenNuevaFecha}"}` //se prepara para ser objeto
        const fechaObjetoJson = JSON.parse(fechaObjeto) //se convierte en objeto
        mes.push(fechaObjetoJson)
    }

    const semana = []
    for(let i=0; i<7; i++){
        const idFecha = 0 + i;
        const nuevaFecha = new Date(fechaActual)
        nuevaFecha.setDate(fechaActual.getDate() + i);
        const resumenNuevaFecha = nuevaFecha.toLocaleDateString('es-ES')
        const fechaObjeto = `{"id":${idFecha}, "fecha":"${resumenNuevaFecha}"}`
        const fechaObjetoJson = JSON.parse(fechaObjeto)
        semana.push(fechaObjetoJson)
    }


    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>ELEGI FECHA</h1>
            <div className='containerFechas'>
                <ContenedorFechas horarios={horarios} />
            </div>
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="VOLVER" />
            </Link>
        </div>
    )
}

export default EleccionFechaDemo