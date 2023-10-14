import React from 'react'

const EleccionFecha3 = () => {

    const fechaActual = new Date()
    console.log(fechaActual)
    const año = fechaActual.getFullYear()
    const mes = fechaActual.getMonth()
    const dia = fechaActual.getDate()
    const hora = fechaActual.getHours()
    const minutos = fechaActual.getMinutes()
    const segundos = fechaActual.getSeconds()
    const fechaEspecifica = new Date(2023, 9, 15, 14,30); //es un objeto, no lo puedo renderizar
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES'); // Por ejemplo: "15/10/2023"
    const horaFormateada = fechaActual.toLocaleTimeString('es-ES'); // Por ejemplo: "14:30:00"

    return (
        <div>
            <p>probando</p>
            <p>año: {año}</p>
            <p>mes: {mes + 1}</p>
            <p>dia: {dia}</p>
            <p>hora: {hora}</p>
            <p>minutos: {minutos}</p>
            <p>segundos: {segundos}</p>
            <p>fecha formateada: {fechaFormateada}</p>
            <p>hora formateada: {horaFormateada}</p>
        </div>
    )
}

export default EleccionFecha3

/*INFORMACION*/

/*
const fechaActual = new Date();
console.log(fechaActual); // Muestra la fecha y hora actual

******* ESTA ME SIRVE PARA CREAR UNA VARIABLE CUANDO SE ELIJA EL TURNO CON FECHA ESPECIFICA****
const fechaPersonalizada = new Date(2023, 9, 15, 14, 30);
console.log(fechaPersonalizada); // Crea una fecha para el 15 de octubre de 2023 a las 2:30 PM


**** COMPONENTE ESPECIFICO ****
const fecha = new Date();
const año = fecha.getFullYear();
const mes = fecha.getMonth(); // 0 (enero) a 11 (diciembre)
const dia = fecha.getDate();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();

**** FORMATO DE PRESENTACION ****
const fecha = new Date();
const fechaFormateada = fecha.toLocaleDateString('es-ES'); // Por ejemplo: "15/10/2023"
const horaFormateada = fecha.toLocaleTimeString('es-ES'); // Por ejemplo: "14:30:00"

**** OPERACION CON FECHAS ****
const fecha = new Date();
fecha.setDate(fecha.getDate() + 7); // Suma 7 días
fecha.setHours(fecha.getHours() - 2); // Resta 2 horas

**** COMPARACIONES CON FECHAS ****
const fecha1 = new Date(2023, 9, 15);
const fecha2 = new Date(2023, 9, 16);
if (fecha1 < fecha2) {
console.log('fecha1 es anterior a fecha2');
}

*/