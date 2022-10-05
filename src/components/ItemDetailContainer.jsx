import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import "../styles/ItemDetail.css"
import Contcantidad from './Contcantidad';

const ItemDetailContainer = () => {

    const [producto, setproducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/json/productos.json`)
        .then(res => res.json())
        .then(productos => {
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setproducto(producto1)
        })
    }, []);

    return (
        <>
            <div className='DetailCont'>
                <div className='DetailContInf'>
                    <div className="imgCont">
                        <img src={`${process.env.PUBLIC_URL}/img/${producto.img}`} alt={`${producto.img}`} />
                    </div>
                    <div className="infoCont">
                        <h2>{producto.nombre}</h2>
                        <p className="DetailPrecio">${producto.precio}</p>
                        <p className="DetailPrecio">6 cuotas sin interes de ${producto.precio / 6}</p>
                        <Contcantidad></Contcantidad>
                        <button className='btn btn-success'>Agregar al carrito</button>                    
                    </div>
                </div>
                
                <div className="ExtraInfo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aspernatur odit suscipit sed magnam illo esse, tempora alias nulla, quasi, debitis explicabo quo. Temporibus minima quae a sunt exercitationem perspiciatis!
                    Eos inventore nisi recusandae quo ratione maxime voluptatem dolor blanditiis beatae harum quisquam optio corporis perspiciatis voluptate voluptatibus sint explicabo voluptatum eius dolorem illum impedit, incidunt est? Harum, sequi facilis.
                    Suscipit quam laudantium nesciunt quia blanditiis reprehenderit corrupti quidem corporis, voluptate repudiandae dolorum explicabo qui maxime rerum consectetur facilis numquam excepturi nemo libero iure nihil sint. Hic molestiae tempora ab.
                    Maiores libero nesciunt, beatae sunt inventore asperiores? Possimus libero recusandae eligendi quae ea cum, fugiat consequatur magnam autem delectus minus, nobis voluptatum? Quam, in dolor. Non ex magni eveniet vel?</p>
                </div>
            </div>
        </>
    );
}

export default ItemDetailContainer;
