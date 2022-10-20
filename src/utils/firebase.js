import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "watchme-3e199.firebaseapp.com",
  projectId: "watchme-3e199",
  storageBucket: "watchme-3e199.appspot.com",
  messagingSenderId: "526131782864",
  appId: "1:526131782864:web:adcc2b3ccd31c085662ad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const cargarBD = async () => {
    const promise = await fetch(`${process.env.PUBLIC_URL}/json/productos.json`)
    const productos = await promise.json()
    productos.forEach( async (producto) => {
        await addDoc (collection(db, "productos"), {
            nombre: producto.nombre,
            idCategoria: producto.idcategoria,
            precio: producto.precio,
            img: producto.img,
            stock: producto.stock

        })
    })
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    return prod
  }
  
  const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(producto => [producto.id, producto.data()])
    return items
  }
  
  const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
  }
  
  const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
  }
  
  const createProducto = async (objProd) => {
    const estado = await addDoc(collection(db, "productos"), {
      nombre: objProd.nombre,
      marca: objProd.marca,
      modelo: objProd.modelo,
      categoria: objProd.idCategoria,
      stock: objProd.stock,
      precio: objProd.precio,
      img: objProd.img
    })
  
    return estado
  }

export {cargarBD, getProductos, getProducto, updateProducto, deleteProducto, createProducto}