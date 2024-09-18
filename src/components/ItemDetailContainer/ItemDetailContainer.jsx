import React, { useEffect, useState } from 'react'
import { traerUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()
    console.log(idItem);
    
    useEffect(()=> {
        traerUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])

    console.log("producto", producto)
  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )

}

export default ItemDetailContainer