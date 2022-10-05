import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <>
            <button className='btn btn-success'><Link className='nav-link active' to={"/productos"}>Ver todos los productos</Link></button>
        </>
    );
}

export default Home;
