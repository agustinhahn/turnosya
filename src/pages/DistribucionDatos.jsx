import React, { useContext, useState } from 'react';
import ContenedorInfo from '../components/ContenedorInfo';

const DistribucionDatos = ({tiposdemasajes}) => {


    return (
        <>
            {tiposdemasajes.map((p)=> {
                return(
                    <>
                        <ContenedorInfo
                            key={p.id}
                            id={p.id}
                            servicio={p.servicio}
                            precio={p.precio}
                            info={p.info}
                        />
                    </>
                )
            })}
        </>
    )
}

export default DistribucionDatos