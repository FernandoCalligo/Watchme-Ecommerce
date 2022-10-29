import React from 'react';
import "../styles/grid.css"
import { Link } from 'react-router-dom';

const Homegrid = () => {
    return (
        <>
            <div className="gridHomeCont">
            <Link className='gridLink' to={"/productos/relojes"}>
                <img src="https://firebasestorage.googleapis.com/v0/b/watchme-3e199.appspot.com/o/relojport.jpg?alt=media&token=c91521e9-b9e9-481e-a2f1-bf966e9d09be" alt="Relojes" className=" imggrid cat1" />
                <span className='gridSpan'>Relojes</span>
            </Link>
            <Link className='gridLink' to={"/productos/lentes"}>
                <img src="https://firebasestorage.googleapis.com/v0/b/watchme-3e199.appspot.com/o/lentesport.jpg?alt=media&token=a81d6c2c-ed60-4925-9fb5-9ee6553b2afb" alt="Lentes" className=" imggrid cat2" />
                <span className='gridSpan'>Lentes</span>
            </Link>  
            </div>
        </>
    )}

export default Homegrid;
