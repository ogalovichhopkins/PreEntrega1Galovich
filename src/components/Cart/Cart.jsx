import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

    if(cantidadTotal === 0){
        return(
            <>
                <h2>Carrito vacío</h2>
                <Link to="/">Ver productos</Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key ={producto.id} {...producto}/>)
        }

        <h3>Total ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
        <Link to="/checkout">Terminar compra</Link>
    </div>
  )
}

export default Cart