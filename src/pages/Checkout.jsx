import React,{useState, useContext, useEffect} from 'react';
import { DatosContext } from '../context/datosContext';
import { getOrden } from '../utils/firebase';
import "../styles/checkout.css"

const Checkout = () => {

    const {datos} = useContext(DatosContext)

    const [ordenid, setOrdenid] = useState([]);


    useEffect(() => {
        getOrden().then(ordenes => {
            const card = ordenes.map(ordenes => {
                if (datos.at(-1).nombre === ordenes[1].nombre) {
                    setOrdenid(ordenes[0])
                }
                })
        })
    }, []);

    return (
        <>
            <div className='checkCont'>
                <h3>Gracias por tu compra {datos.at(-1).nombre}!</h3>
                <div className="checkInfo">
                    <p>En breve le enviareamos un email con su factura a</p> <p className='important'>{datos.at(-1).email}</p>
                </div>
                <div className="checkInfo">
                    <p>La id de su compra es</p> <p className='important'>{ordenid}</p>
                </div>
            </div>
        </>
    );
}

export default Checkout;

