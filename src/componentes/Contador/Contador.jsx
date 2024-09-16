import { useState } from "react"
import './Contador.css'

const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
    }

    const restarContador = () => {
        if ( contador > inicial) {
            setContador (contador - 1)
        }
    }

return (
    <>
        <div className="ConCon">
            <button onClick={restarContador}> - </button>
            <strong>{contador}</strong>
            <button onClick={sumarContador}> + </button>
            <button onClick={()=>funcionAgregar(contador)}>Agregar al carrito</button>
        </div>

        
    </>
)
}

export default Contador