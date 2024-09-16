import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategorias } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import loadingGif from '/img/carga.gif'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [showLoading, setShowLoading] = useState(true)

    const { idCategoria } = useParams()

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false)
        }, 5000)

        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos

        funcionProductos(idCategoria)
            .then(res => {
                setProductos(res)
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
    }, [idCategoria])

    return (
        <div style={{ textAlign: "center" }}>
            {showLoading && (
                <div style={styles.loaderContainer}>
                    <img 
                        src={loadingGif} 
                        alt="Loading..." 
                        style={styles.loaderImage} 
                    />
                </div>
            )}
            {!showLoading && !loading && (
                < >
                    <h2 style={{ marginTop: "10px" }}>Los mejores artículos para tus mascotas!</h2>
                    <ItemList  productos={productos}/>
                </>
            )}
        </div>
    )
}

const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',    
        height: '100vh',          
        margin: '20px'            
    }   
}

export default ItemListContainer
