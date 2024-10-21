import React from 'react'
import Contador from '../Contador/contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, img, stock, descrip}) => {
  const[agregarCantidad, setAgregarCantidad] = useState(0)

  const{agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados" + cantidad)

    const item = {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
  }


  return (
    <div className='contenedorDetail'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>id: {id}</h3>
        <p>Stock: {stock}</p>
        <img src={img} alt={nombre} />
        <p><strong>Descripción: </strong>{descrip}</p>
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    
    </div>
  )
}

export default ItemDetail