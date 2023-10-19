import React from 'react';
import ContenedorinfoFechas from './ContenedorInfoFechas'

const DistribucionDatosFecha = ({fechas}) => {


    return (
        <>
            {fechas.map((p)=> {
                return(
                    <>
                        <ContenedorinfoFechas
                            key={p.id}
                            id={p.id}
                            fecha={p.fecha}
                        />
                    </>
                )
            })}
        </>
    )
}

export default DistribucionDatosFecha