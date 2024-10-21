import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './components/Cart/cart'
import Checkout from './components/Checkout/Checkout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar/>
          <Routes>  
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/Item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element= {<Cart/>}></Route>
            <Route path='/checkout' element= {<Checkout/>}></Route>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>

  );
};

export default App