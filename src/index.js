import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarritoProvider } from './context/CarritoContext';
import {DatosProvider } from "./context/datosContext"
import "./utils/funcionesUtiles"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
        <DatosProvider>
           <App/> 
        </DatosProvider>
    </CarritoProvider>
);
