import React, {createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (prod, cant) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) //Si existe o no

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
            const id = prod[0]
            const x = prod[1]
            const prodCarrito = {id, ...x, cantidad: cant}  
            aux.push(prodCarrito)
        }
        setCarrito(structuredClone(aux))
        console.log(carrito)

    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) 

        aux.splice(indice,1)
        setCarrito(structuredClone(aux))
        console.log(carrito)

    }

    const quitarProductos = () => {
        const aux = []
        setCarrito(aux)
    }

    const vertotal = () => {
        return (
            carrito.reduce((previus, actual) => previus + actual.cantidad * actual.precio, 0)
        )
    }

    const isinCarrito = (id) => {
        return carrito.find(producto => producto.id === id) ? true : false
    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, vertotal, isinCarrito, quitarProductos}}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};