import { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const Cart = () => {

    const { cart, Limpiar, quitarItem, precioTotal } = useContext(CartContext);

    return (
        !!cart.length
            ? <div className="container col-12 d-flex flex-column justify-content-center  cart" >
                {
                    cart.map(
                        obj => {
                            return (
                                <div className="cart-item" key={obj.item.id}>
                                    <h2>{obj.item.title}</h2>
                                    <span>Cantidad: {obj.cantidad}</span>
                                    <span>Precio: {obj.item.price}</span>
                                    <span>Subtotal: {obj.item.price * obj.cantidad}</span>
                                    <img src={obj.item.pictureUrl} alt={obj.item.title} />
                                    <button onClick={() => quitarItem(obj.item.id)}>X</button>
                                </div>
                            )
                        }
                    )
                }
                <div>TOTAL: {precioTotal()}</div>
                <button onClick={Limpiar}>Vaciar Carrito</button>
                <div><Link to="/checkout">CHECKOUT </Link></div>

            </div>
            : <div className="cart-button"><Link to="/">Agregar Productos </Link></div>
    )
}