import "./Checkout.css";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const mostrarAlerta = () => {
  Swal.fire({
    imageUrl:
      "https://img.freepik.com/fotos-premium/gato-perro-tiernos_1158573-11.jpg?w=740",
    title: "¡Su pedido ha sido registrado!",
    text: "Será informado de su envío en la brevedad.",
    imageAlt: "imagen gracias",
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Continuar navegando!',
    customClass: { image: "saimg", confirmButton: "saboton" },
  });
};

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const navigate = useNavigate();

  const manejadorFormulario = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden.");
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
        vaciarCarrito();
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");
        mostrarAlerta();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden.");
      });
  };

  return (
    <div className="alfa">
      <h2> Checkout:</h2>

      {!ordenId ? (
        <form onSubmit={manejadorFormulario}>
          {carrito.map((producto) => (
            <div key={producto.item.id}>
              <p>
                {producto.item.nombre} x {producto.cantidad}
              </p>
              <p>$ {producto.item.precio * producto.cantidad}</p>
              <hr />
            </div>
          ))}
          <div className="input-container">
            <input
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              placeholder=" Nombre "
              className="nombre-input"
            />
            <label htmlFor="" className="nombre-label"></label>
          </div>

          <div className="input-container">
            <input
              type="text"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
              placeholder=" Apellido "
              className="apellido-input"
            />
            <label htmlFor="" className="apellido-label"></label>
          </div>

          <div className="input-container">
            <input
              type="text"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
              placeholder=" Teléfono "
              className="telefono-input"
            />
            <label htmlFor="" className="telefono-label"></label>
          </div>

          <div className="input-container">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder=" Email "
              className="email-input"
            />
            <label htmlFor="" className="email-label"></label>
          </div>

          <div className="input-container">
            <input
              type="email"
              onChange={(e) => setEmailConfirmacion(e.target.value)}
              value={emailConfirmacion}
              placeholder=" Email Confirmación "
              className="email-confirmacion-input"
            />
            <label htmlFor="" className="email-confirmacion-label"></label>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit"> Confirmar Compra </button>
        </form>
      ) : (
        <div className="finalFinal">
          <strong>¡Genial! Tu número de orden es: {ordenId}</strong>
          <br />
          <button onClick={() => navigate("/")}>
            Volver a la Página Principal
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
