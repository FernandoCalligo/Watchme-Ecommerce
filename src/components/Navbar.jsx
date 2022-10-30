import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand brandsize" to="/" >WatchMe!</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active navbtn" to="/" >Inicio
                                    <span className="visually-hidden ">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active navbtn" to="/productos/relojes" >Relojes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active navbtn" to="/productos/lentes" >Lentes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active navbtn" to="/nosotros" >Nosotros</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="text" placeholder="Buscar Producto" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                        <div>
                            <Link className="nav-link active" to="/carrito" ><CartWidget></CartWidget></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
