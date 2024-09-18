const productos = [
    { id: 1, nombre: "Aceite de Ajonjolí", precio: 20, img:"../img/Aceite-de-ajonjoli-300x300.jpg", idCategoria: "aceites"},
    { id: 2, nombre: "Aceite de Coco", precio: 20, img:"../img/Aceite-de-coco-300x300.jpg", idCategoria: "aceites"},
    { id: 3, nombre: "Aceite de Linaza", precio: 20, img:"../img/Aceite-de-linaza-300x300.jpg", idCategoria: "aceites"},
    { id: 4, nombre: "Aceite de Palta", precio: 20, img:"../img/Aceite-de-palta-300x300.jpg", idCategoria: "aceites"},
    { id: 5, nombre: "Chasqui", precio: 20, img:"../img/chasqui-300x300.jpg", idCategoria: "galletas"},
    { id: 6, nombre: "Crisino", precio: 20, img:"../img/crisino800x800-300x300.png", idCategoria: "galletas"},
    { id: 7, nombre: "Galleta de algarrobina", precio: 20, img:"../img/galleta-de-algarrobina-300x300.png", idCategoria: "galletas"},
    { id: 8, nombre: "Pan andino", precio: 20, img:"../img/pan-andino-300x300.png", idCategoria: "panes"},
    { id: 9, nombre: "Pan de camote", precio: 20, img:"../img/pan-DE-CAMOTEqwe-300x300.png", idCategoria: "panes"},
    { id: 10, nombre: "Pan Pita", precio: 20, img:"../img/pan-pita-300x300.png", idCategoria: "panes"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const traerUnProducto = (id) => {
    console.log("id23", id)
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

