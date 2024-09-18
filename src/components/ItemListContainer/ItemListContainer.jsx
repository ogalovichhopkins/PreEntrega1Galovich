import {useState, useEffect} from 'react';
import { getProductos, traerUnaCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import React from 'react';

const ItemListContainer = () => {
  const[productos, setProductos] = useState([]);

  const {idCategoria} = useParams()

  useEffect(() => {
    const funcionProductos = idCategoria ? traerUnaCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <>
      <h2>Productos de la tienda</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer