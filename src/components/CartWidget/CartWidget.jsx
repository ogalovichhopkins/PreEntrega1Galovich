import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div>
      <Link to="/cart">
        <img className='imgCarrito' src="https://w7.pngwing.com/pngs/618/1013/png-transparent-shopping-cart-online-shopping-empty-cart-angle-logo-shopping-centre.png" alt="" />
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget