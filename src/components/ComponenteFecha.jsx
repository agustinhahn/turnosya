import React from 'react'

const ComponenteFecha = ({id,fecha}) => {

    console.log("Hola desde componente fecha")
    return (
        <>          
            <div className= 'animated zoomIn contfecha'>
                <p>{fecha}</p>
            </div>
        </>
)
}

export default ComponenteFecha