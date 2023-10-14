import React from 'react'
import ComponenteFecha from './ComponenteFecha'

const ContenedorFechas = ({fechaDisponible}) => {


    return (
        <>
            {fechaDisponible.map((p)=> {
                return(
                    <>
                        <ComponenteFecha
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

export default ContenedorFechas