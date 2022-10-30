import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Relojes from './pages/Relojes';
import Lentes from "./pages/Lentes";
import Carrito from "./pages/Carrito"
import Prod from './components/Prod';
import Checkout from './pages/Checkout';

const App = () => {

  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos/relojes' element={<Relojes categoria={1}/>} />
          <Route path='/productos/lentes' element={<Lentes categoria={2}/>} />
          <Route path='/productos' element={<Productos/>}></Route>
          <Route path='/item/:id' element={<Prod/>} />
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path='/carrito' element={<Carrito/>}></Route>
          <Route path='/checkout' element={<Checkout datos={[]}/>}></Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
