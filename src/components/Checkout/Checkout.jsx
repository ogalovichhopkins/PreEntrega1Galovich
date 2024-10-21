import { useState, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  const manejadorFormulario = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
      setError("llena todos los campos");
      return;
    }

    if (email != emailConfirm) {
      setError("no coinciden los campos del email");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        // vaciarCarrito()
      })
      .catch((error) => {
        console.log("error en la orden", error);
        setError("se produjo error al crear orden");
      });

  };
  return (
    <div>
      <h2>Checkout: </h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>{producto.item.nombre}</p>
            <p>
              {producto.item.precio} x {producto.cantidad}
            </p>
            <p>{producto.item.precio}</p>
            <hr />
          </div>
        ))}
        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div>
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div>
          <label htmlFor="">Teléfono</label>
          <input
            type="text"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="">Email confirmación</label>
          <input
            type="text"
            onChange={(e) => setEmailConfirm(e.target.value)}
            value={emailConfirm}
          />
        </div>
        {error && <p>{error}</p>}

        <button type="submit">Confirmar compra</button>
        {ordenId && <strong>Gracias por tu compra, número de orden es: {ordenId}</strong>}
      </form>
    </div>
  );
};

export default Checkout;
