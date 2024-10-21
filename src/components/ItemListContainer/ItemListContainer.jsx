import {useState, useEffect} from 'react';
import { getProductos, traerUnaCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import React from 'react';
import { db } from '../../services/config';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const[productos, setProductos] = useState([]);

  const {idCategoria} = useParams()

  useEffect(()=>{
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCategoria", "==", idCategoria)) : (collection(db, "productos"))
    console.log(idCategoria)
    console.log(misProductos)
    getDocs(misProductos)
    .then(res => {
      const nuevosProductos = res.docs.map(doc => {
        const data = doc.data()
        return {id:doc.id, ...data}
      })
      console.log(nuevosProductos)
      setProductos(nuevosProductos)
    })
    .catch(error => console.log(error))
    .finally(()=>{
      console.log("proceso finalizado")
    })
  }, [idCategoria])

  // useEffect(() => {
  //   const funcionProductos = idCategoria ? traerUnaCategoria : getProductos;

  //   funcionProductos(idCategoria)
  //     .then(respuesta => setProductos(respuesta))
  //     .catch(error => console.log(error))

  // }, [idCategoria])

  return (
    <>
      <h2>Productos de la tienda</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer