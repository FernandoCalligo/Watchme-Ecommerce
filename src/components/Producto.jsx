import React,{useState,useEffect} from 'react';
import { getProductos } from '../utils/firebase';
import '../styles/ItemListConteiner.css'
import { Link } from 'react-router-dom';

const Producto = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getProductos().then(productos => {
            const card = productos.map(prod =>
            <div className='row'>
                <Link className='nav-link active' to={`/item/${prod[0]}`}>
                    <div className="cont" key={prod[0]}>
                        <img src={prod[1].img} alt={prod[1].nombre} />
                        <div className="info">
                            <div className="infoIcon">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className='detallesprod'>
                    <p className='nombreprod'>{prod[1].nombre}</p>
                    <p className='precioprod'>${prod[1].precio}</p>
                </div>
                <span>6 cuotas sin interes de ${prod[1].precio / 6}</span>
                <button class="btn btn-primary"><Link className='nav-link active' to={`/item/${prod[0]}`}>Ver Producto</Link></button>
            </div>
            )

            setProducto(card)

        })


    }, []);
    return (
        <>
            {producto}
        </>
    );
}


export default Producto;
