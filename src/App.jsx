import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import Relojes from './pages/Relojes';
import Lentes from "./pages/Lentes"

const App = () => {

  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos/relojes' element={<Relojes categoria={1}/>} />
          <Route path='/productos/lentes' element={<Lentes categoria={2}/>} />
          <Route path='/productos' element={<Productos/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/contacto' element={<Contacto/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
