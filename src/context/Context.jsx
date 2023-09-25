import {createContext, useState} from 'react'

export const ContextApp = createContext(null)


export const Context = ({children}) =>{

    const [salida, setSalida] = useState(false);

    return (

        <ContextApp.Provider value={{salida, setSalida}}>
            {children}
        </ContextApp.Provider>

    )
}

export default Context