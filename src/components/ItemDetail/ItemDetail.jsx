import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorDetail'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>id: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum et perspiciatis ratione reiciendis exercitationem cupiditate dolorum, nemo sequi ad fugiat sed officia accusamus veniam, nam saepe neque dolorem aspernatur? Cupiditate.</p>
    </div>
  )
}

export default ItemDetail