import React from 'react';
import '../ItemListConteiner.css';
import Producto from './Producto';

const ItemListConteiner = () => {
    return (
        <>
            <div className="productcont">
                <Producto prod = "Reloj 1"></Producto>
                <Producto prod = "Reloj 2"></Producto>
            </div>   
        </>
    );
}

export default ItemListConteiner;
