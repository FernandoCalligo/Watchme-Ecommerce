import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import "../styles/carrito.css"
import Modal from '../components/modal';

const Carrito = () => {
    const {carrito, quitarProducto, vertotal, quitarProductos} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    useEffect(() => {
        const prodMostrar  = carrito.map(producto =>
            <div className="carritoCont" key={producto.id}>
                <div className="carritoInfo">
                <img src={producto.img} alt={producto.nombre} />
                    <div className="carritoDet">
                        <h1>{producto.nombre}</h1>
                        <p>Precio: {producto.precio}</p>
                        <p> Cantidad: {producto.cantidad}</p>
                        <p>Total {producto.cantidad * producto.precio}</p>
                        <button className='btnBorrar' onClick={ () => quitarProducto(producto)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            )

        setCarritoLocal(prodMostrar)

    }, [carrito]);


   const app = (carrito.length != 0) ? <> <div className='EliminarTodo'> <button className='btn btn-danger' onClick={() => quitarProductos()}>Eliminar Todo</button> </div> {carritoLocal} <div className='carritoCheck'><p>Total de la compra: ${vertotal()}</p> <button className='btn btn-success' onClick={() => cambiarEstadoModal1(!estadoModal1)} >Finalizar Compra</button> </div> <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}></Modal>  </> : <div className='err'> <h1>No hay elementos en en el carrito</h1> <Link to={"/"}><button className='btn btn-primary'>Volver al Inicio</button></Link></div>
 
    console.log(carrito)
    return app


}

export default Carrito;