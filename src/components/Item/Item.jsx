import { Link } from 'react-router-dom'
import React from 'react'
import './Item.css';

const Item = ({id, nombre, precio, img}) => {
    return (
            <div className='cardDeProducto'>
            <img src={img} alt={nombre} />
            <h3>Nombre: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>ID: {id}</p>
            <Link to={`/item/${id}`}>Detalle</Link>
        </div>
    )
}

export default Item