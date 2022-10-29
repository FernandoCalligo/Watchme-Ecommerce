import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../utils/firebase';
import ItemDetailContainer from './ItemDetailContainer';

const Prod = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
       getProducto(id).then(prod => {
        setProducto(prod)
    })
   
    }, [])

    if (producto.length != 0) {
        return (
                <div>
                    <ItemDetailContainer producto={producto}/>
    
                </div>
        )
}}

export default Prod;
