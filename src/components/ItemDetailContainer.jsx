import React,{ useState, useContext} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import "../styles/ItemDetail.css"
import { Link } from 'react-router-dom';

const ItemDetailContainer = ({producto}) => {

    const {agregarProducto} = useContext(CarritoContext)
    const [cantidad, setCantidad] = useState(1);

    const cantProducto = (operacion) => {
        if(operacion === "+") {
            if(cantidad < producto[1].stock) {
              setCantidad(cantidad + 1)
            }   
        } else {
          if(cantidad > 1) {
            setCantidad(cantidad - 1)
          }
      }
    }

    return (
        <>
            <div className='DetailCont'>
                <div className='DetailContInf'>
                    <div className="imgCont">
                        <img src={producto[1].img} alt={producto[1].nombre} />
                    </div>
                    <div className="infoCont">
                        <h2>{producto[1].nombre}</h2>
                        <p className="DetailPrecio">${producto[1].precio}</p>
                        <p className="DetailPrecio">6 cuotas sin interes de ${producto[1].precio / 6}</p>
                        <div className='contCantidad'>
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => cantProducto("-")}>-</button>
                                <span>{cantidad}</span>
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => cantProducto("+")}>+</button>
                        </div>
                        <Link to={"/carrito"}><button className='btn btn-success' onClick={() => agregarProducto(producto, cantidad)}>Agregar al carrito</button></Link>                    
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
