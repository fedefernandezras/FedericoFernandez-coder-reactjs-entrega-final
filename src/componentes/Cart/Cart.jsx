import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="emptCar">
        <h2>Carrito sin productos</h2>
        <div className="sigma">
          <Link to="/">Ver Productos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fullCar">
      <h3>Tu carrito de compras!</h3>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}
      <div className="montos">
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
      </div>
      <div className="comandos">
        <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout">
          <button>Realizar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
