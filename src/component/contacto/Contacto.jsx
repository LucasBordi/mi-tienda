import {React,useContext} from 'react'
import { CartContext } from './../../context/CartContext';

const Contacto = () => {
    const estadoGlobal = useContext(CartContext)
    console.log(estadoGlobal);
    return (
        <div>
            <h1>Nuestros contactos</h1>
            <h3 className="icon-whatsapp"> Por whatsApp al 1555589922</h3>
            <h2 className="icon-bubbles4"> Por nuestras Redes</h2>
            <h3 className="icon-facebook2"> Facebook</h3>
            <h3 className="icon-instagram"> Instagram</h3>
        </div>
    )
}

export default Contacto
