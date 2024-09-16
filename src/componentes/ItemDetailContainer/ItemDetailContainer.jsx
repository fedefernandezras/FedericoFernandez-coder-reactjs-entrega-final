import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import loadingGif from '/img/carga.gif'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showLoading, setShowLoading] = useState(true)

    const { idItem } = useParams()

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false)
        }, 5000)

        getUnProducto(idItem)
            .then(respuesta => {
                setProducto(respuesta)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
            .finally(() => {
                clearTimeout(timer)
                setShowLoading(false)
            })

        return () => clearTimeout(timer) 
    }, [idItem])

    return (
        <div style={styles.loaderContainer}>
            {showLoading && <img  src={loadingGif} alt="Loading..." />}
            {!showLoading && !loading && <ItemDetail {...producto} />}
        </div>
    )
}

const styles = {
  loaderContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',     
      height: '100vh',        
      margin: '20px',            
  }
  
}

export default ItemDetailContainer