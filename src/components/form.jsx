import React, {Fragment, useState, useContext} from 'react';
import "../styles/form.css"
import { DatosContext } from '../context/datosContext';
import {createOrden} from "../utils/firebase.js"
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate  } from 'react-router-dom';



const Form = () => {
    const navigate = useNavigate ()
    const {agregarDatos} = useContext(DatosContext)
    const {quitarProductos} = useContext(CarritoContext)

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        email: "",
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        
        agregarDatos(datos)

        createOrden(datos)
        quitarProductos()
        navigate('/checkout')
    }

    return (
        <Fragment>
            <div className="form">
                <form className="formcont" onSubmit={enviarDatos}>
                    <div className="formInfo">
                        <input type="text" placeholder="Nombre" className="form-control formCompra" onChange={handleInputChange} name="nombre"></input>
                    </div>
                    <div className="formInfo">
                        <input type="text" placeholder="Apellido" className="form-control formCompra" onChange={handleInputChange} name="apellido"></input>
                    </div>
                    <div className="formInfo">
                        <input type="email" placeholder="Email" className="form-control formCompra" onChange={handleInputChange} name="email"></input>
                    </div>
                    <button className="btn btn-success" type="submit">Comprar!</button>
                </form>     
            </div>
        </Fragment>
    );
}

export default Form;
