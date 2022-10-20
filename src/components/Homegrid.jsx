import React from 'react';
import "../styles/grid.css"
import { Link } from 'react-router-dom';

const Homegrid = () => {
    return (
        <>
            <div className="gridHomeCont">
            <Link className='gridLink'>
                <img src="https://firebasestorage.googleapis.com/v0/b/watchme-3e199.appspot.com/o/menport.jpg?alt=media&token=7bc174d3-5316-4885-82cf-374b04d969c0" alt="Men" className=" imggrid cat1" />
                <span className='gridSpan'>Hombre</span>
            </Link>
            <Link className='gridLink'>
                <img src="https://firebasestorage.googleapis.com/v0/b/watchme-3e199.appspot.com/o/womenport.jpg?alt=media&token=7a279309-eb33-411c-9128-ed61ed8f56a8" alt="Women" className=" imggrid cat2" />
                <span className='gridSpan'>Mujer</span>
            </Link>
            <Link className='gridLink' to={"/productos/relojes"}>
                <img src="https://firebasestorage.googleapis.com/v0/b/watchme-3e199.appspot.com/o/relojport.jpg?alt=media&token=c91521e9-b9e9-481e-a2f1-bf966e9d09be" alt="Relojes" className=" imggrid cat3" />
                <span className='gridSpan'>Relojes</span>
            </Link>
            <Link className='gridLink' to={"/productos/lentes"}>
                <img src="https://firebasestorage.googleapis.com/v0/b/watchme-3e199.appspot.com/o/lentesport.jpg?alt=media&token=a81d6c2c-ed60-4925-9fb5-9ee6553b2afb" alt="Lentes" className=" imggrid cat4" />
                <span className='gridSpan'>Lentes</span>
            </Link>  
            </div>
        </>
    )}

export default Homegrid;
