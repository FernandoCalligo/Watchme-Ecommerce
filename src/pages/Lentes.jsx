import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Lentes = ({categoria}) => {
    
    console.log(categoria)
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const consultarbdd = async () => {
            const res = await fetch(`${process.env.PUBLIC_URL}/json/productos.json`) // ${process.env.PUBLIC_URL} utilice esto porque no podia acceder a la carpeta public
            const productos = await res.json()
            const newarray = productos.filter(productos => productos.idcategoria === categoria)

            /* console.log(newarray) */

            const card = newarray.map(prod =>
            <div className='row'>
                <div className="cont">
                    <div className="circle"></div>
                    <img src={`${process.env.PUBLIC_URL}/img/${prod.img}`} alt={`${prod.img}`} />
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
                <div className='detallesprod'>
                    <p className='nombreprod'>{prod.nombre}</p>
                    <p className='precioprod'>${prod.precio}</p>
                </div>
                <span>6 cuotas sin interes de ${prod.precio / 6}</span>
                <button className="btn btn-primary"><Link className='nav-link active' to={`/item/${prod.id}`}>Ver Producto</Link></button>
            </div>
            )

            return card
        }

        consultarbdd().then(producto => setProducto(producto))
    }, []);
    return (
        <div className="productcont">
            {producto}
        </div>
    );
}

export default Lentes;
