import React from "react";
import "./ItemDetail.css";
import Contador from "../Contador/Contador";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const ItemDetail = ({ id, nombre, precio, img, stock, det }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
    toast.success("Su compra fue enviada al carrito", {
      autoClase: 1000,
      theme: "dark",
      position: "top-right",
    });
  };

  return (
    <div className="contenedorItem">
      <img src={img} alt={nombre} />

      <div className="text-content">
        <h2>{nombre}</h2>
        <p>{det}</p>
        <h3>Precio : $ {precio}</h3>
        <h3>ID de producto: {id}</h3>
        {agregarCantidad > 0 ? (
          <Link to="/Cart">
            <button>Ir al carrito de compras</button>
          </Link>
        ) : (
          <Contador
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
