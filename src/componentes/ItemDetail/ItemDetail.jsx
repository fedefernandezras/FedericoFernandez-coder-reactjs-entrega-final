import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, nombre, precio, img, stock,det}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
  }

  return (
    <div className='contenedorItem'>
      <img src={img} alt={nombre} />
  
      <div className='text-content'>
        <h2>{nombre}</h2>
        <p>{det}</p>
        <h3>Precio unitario: $ {precio}</h3>
        {
          agregarCantidad > 0 ? (
            <Link to="/">
              <button>Terminar Compra</button>
            </Link>
          ) : (
            <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )
        }
      </div>
    </div>
  )
}

export default ItemDetail