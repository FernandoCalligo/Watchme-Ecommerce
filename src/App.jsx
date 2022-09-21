import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListConteiner from './components/ItemListConteiner';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ItemListConteiner></ItemListConteiner>
    </div>
  );
}

export default App;
