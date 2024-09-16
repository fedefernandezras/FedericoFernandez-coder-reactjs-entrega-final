import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='carrito'>
        <img className='carritoimg' src="./img/carrito.png" alt="Carrito de compras" />
        <strong>(7)</strong>
    </div>
  )
}

export default CartWidget