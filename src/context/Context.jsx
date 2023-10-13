import {createContext, useState} from 'react'

export const ContextApp = createContext(null)


export const Context = ({children}) =>{

    const [salida, setSalida] = useState(false);
    const [mostrarInfo, setMostrarInfo] = useState(false);

    return (

        <ContextApp.Provider value={{salida, setSalida, mostrarInfo,setMostrarInfo}}>
            {children}
        </ContextApp.Provider>

    )
}

export default Context