import React from 'react'
import ComponenteFecha from './ComponenteFecha'

const ContenedorFechas = ({horarios}) => {


    return (
        <>
            {horarios.map((p)=> {
                return(
                    <>
                        <ComponenteFecha
                            key={p.id}
                            id={p.id}
                            hora={p.hora}
                        />
                    </>
                )
            })}
        </>
    )
}

export default ContenedorFechas