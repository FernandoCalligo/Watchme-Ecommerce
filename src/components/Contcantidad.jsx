import React,{useState} from 'react';

const Contcantidad = ({stock}) => {

    const [cantidad, setcantidad] = useState(1);
    const actualizarcant = (operacion) => {
        if (operacion == "+") {
            if (cantidad < stock) {
                setcantidad(cantidad + 1)
            }
        } else if ( cantidad > 1) {
            setcantidad(cantidad - 1)
        }
    }

    return (
        <div className='contCantidad'>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => actualizarcant("-")}>-</button>
                <span>{cantidad}</span>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => actualizarcant("+")}>+</button>
        </div>
    );
}

export default Contcantidad;
