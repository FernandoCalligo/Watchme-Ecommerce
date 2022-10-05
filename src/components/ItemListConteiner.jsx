import React from 'react';
import "../styles/ItemListConteiner.css"
import Producto from './Producto';

const ItemListConteiner = () => {


    return (
        <>
            <div className="productcont">
                <Producto></Producto>
            </div>   
        </>
    );
}

export default ItemListConteiner;
