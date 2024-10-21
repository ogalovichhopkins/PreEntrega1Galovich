
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMOQX8xd0k50ZJcqYP2WnQO84RG7gXGbs",
  authDomain: "ecotiendaoscar.firebaseapp.com",
  projectId: "ecotiendaoscar",
  storageBucket: "ecotiendaoscar.appspot.com",
  messagingSenderId: "757988188441",
  appId: "1:757988188441:web:6499cb79760874139d6588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)

/////////////////////////// subir data firebase

const productos = [
    { nombre: "Aceite de Ajonjolí", stock:10, precio: 20, img:"../img/Aceite-de-ajonjoli-300x300.jpg", idCategoria: "aceites", descrip: "Aceite natural de semillas de ajonjoli con omega 3"},
    { nombre: "Aceite de Coco", stock:10, precio: 20, img:"../img/Aceite-de-coco-300x300.jpg", idCategoria: "aceites", descrip: "Aceite natural de coco con omega 3"},
    { nombre: "Aceite de Linaza", stock:10, precio: 20, img:"../img/Aceite-de-linaza-300x300.jpg", idCategoria: "aceites", descrip: "Aceite natural de semillas de linaza con omega 3"},
    { nombre: "Aceite de Palta", stock:10, precio: 20, img:"../img/Aceite-de-palta-300x300.jpg", idCategoria: "aceites", descrip: "Aceite natural de pepa de palta con omega 3"},
    { nombre: "Chasqui", stock:10, precio: 20, img:"../img/chasqui-300x300.jpg", idCategoria: "galletas", descrip: "Galletas naturales de chasqui"},
    { nombre: "Crisino", stock:10, precio: 20, img:"../img/crisino800x800-300x300.png", idCategoria: "galletas", descrip: "Crisinos integrales de masa madre"},
    { nombre: "Galleta de algarrobina", stock:10, precio: 20, img:"../img/galleta-de-algarrobina-300x300.png", idCategoria: "galletas", descrip: "Galleteas naturales integrales con alto contenido de fibra"},
    { nombre: "Pan andino", stock:10, precio: 20, img:"../img/pan-andino-300x300.png", idCategoria: "panes", descrip: "Pan sin gluten de la sierra peruana"},
    { nombre: "Pan de camote", stock:10, precio: 20, img:"../img/pan-DE-CAMOTEqwe-300x300.png", idCategoria: "panes", descrip: "Pan de camote sin gluten"},
    { nombre: "Pan Pita", stock:10, precio: 20, img:"../img/pan-pita-300x300.png", idCategoria: "panes", descrip: "Pan árabe con bajas calorías"}
]

import {collection, doc, writeBatch} from "firebase/firestore"

const subirProductos = async()=>{
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    productos.forEach((producto)=>{
        const nuevoDoc = doc(productosRef)
        batch.set(nuevoDoc, producto)
    })

    try {
        await batch.commit();
        console.log("Productos subidos")
    } catch(error){
        console.log("error", error)
    }
}

subirProductos()
