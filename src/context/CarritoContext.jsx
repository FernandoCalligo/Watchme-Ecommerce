import React, {createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (prod, cant) => {
        const total = 0
        const totalaux = 0
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
        console.log(total)

    }

    const quitarProducto = (prod) => {
        const aux = carrito
        let indice = aux.findIndex(producto => producto.id  == prod.id) 

        aux.splice(indice,1)
        setCarrito(structuredClone(aux))
        console.log(carrito)

    }

    const vertotal = () => {
        const aux = carrito.precio * carrito.cantidad
        const total = aux + total
    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, vertotal}}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};