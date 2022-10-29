import React, {createContext, useState} from 'react';

const DatosContext = createContext()

const DatosProvider = (data) => {

    const [datos, setDatos] = useState([]);

    const agregarDatos = (data) => {

        const aux = datos
        const datosList = {...data}  
        aux.push(datosList)

        setDatos(structuredClone(aux))
        console.log(datosList)

    }

    const eliminarDatos = () => {
        const aux = []
        setDatos(aux)
    }

    return (
        <>
          <DatosContext.Provider value={{datos, agregarDatos, eliminarDatos }}>
                    {data.children}
        </DatosContext.Provider>  
        </>
    );
}

export{DatosContext, DatosProvider};
