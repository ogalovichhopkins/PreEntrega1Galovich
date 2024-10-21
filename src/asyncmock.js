const productos = [
    { id: 1, nombre: "Aceite de Ajonjolí", stock:10, precio: 20, img:"../img/Aceite-de-ajonjoli-300x300.jpg", idCategoria: "aceites", descrip: "Aceite natural de semillas de ajonjoli con omega 3"},
    { id: 2, nombre: "Aceite de Coco", stock:10, precio: 20, img:"../img/Aceite-de-coco-300x300.jpg", idCategoria: "aceites", descrip: "Aceite natural de coco con omega 3"},
    { id: 3, nombre: "Aceite de Linaza", stock:10, precio: 20, img:"../img/Aceite-de-linaza-300x300.jpg", idCategoria: "aceites", descrip: "Aceite natural de semillas de linaza con omega 3"},
    { id: 4, nombre: "Aceite de Palta", stock:10, precio: 20, img:"../img/Aceite-de-palta-300x300.jpg", idCategoria: "aceites", descrip: "Aceite natural de pepa de palta con omega 3"},
    { id: 5, nombre: "Chasqui", stock:10, precio: 20, img:"../img/chasqui-300x300.jpg", idCategoria: "galletas", descrip: "Galletas naturales de chasqui"},
    { id: 6, nombre: "Crisino", stock:10, precio: 20, img:"../img/crisino800x800-300x300.png", idCategoria: "galletas", descrip: "Crisinos integrales de masa madre"},
    { id: 7, nombre: "Galleta de algarrobina", stock:10, precio: 20, img:"../img/galleta-de-algarrobina-300x300.png", idCategoria: "galletas", descrip: "Galleteas naturales integrales con alto contenido de fibra"},
    { id: 8, nombre: "Pan andino", stock:10, precio: 20, img:"../img/pan-andino-300x300.png", idCategoria: "panes", descrip: "Pan sin gluten de la sierra peruana"},
    { id: 9, nombre: "Pan de camote", stock:10, precio: 20, img:"../img/pan-DE-CAMOTEqwe-300x300.png", idCategoria: "panes", descrip: "Pan de camote sin gluten"},
    { id: 10, nombre: "Pan Pita", stock:10, precio: 20, img:"../img/pan-pita-300x300.png", idCategoria: "panes", descrip: "Pan árabe con bajas calorías"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const traerUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === parseInt(id))
            resolve(producto)
        }, 100)
    })
}

export const traerUnaCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const categoria = productos.filter(item => item.idCategoria === idCategoria)
            resolve(categoria)
        }, 100)
    })
}

