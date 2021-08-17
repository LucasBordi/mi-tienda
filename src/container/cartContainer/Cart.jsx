import { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {
    const { cart, Limpiar, quitarItem, precioTotal } = useContext(CartContext);

    return (
        !!cart.length
            ? <div className="container col-12 cart" >
                {
                    cart.map(
                        (obj) => {
                            return (
                                <div className="cart-item" key={obj.item.id}>
                                    <h2>{obj.item.title}</h2>
                                    <button>+</button>
                                    <span>Cantidad: {obj.cantidad}</span>
                                    <button>-</button>
                                    <span>Precio: {obj.item.price}</span>
                                    <span>Subtotal: {obj.item.price * obj.cantidad}</span>
                                    <img src={obj.item.pictureUrl} alt={obj.item.title} />
                                    <button className="cart-cruz" onClick={() => quitarItem(obj.item.id)}>X</button>
                                </div>
                            )
                        }
                    )
                }
                <div className="cart-button">TOTAL: {precioTotal()}</div>
                <button className="cart-button" onClick={Limpiar}>Vaciar Carrito</button>
                <Link className="cart-button cart" to="/checkout">Confirmar Compra</Link>

            </div>
            :
            <>
                <h2 className="title">El carrito se encuentra vacio</h2>
                <div className="cart-button"><Link className="cart" to="/">Agregar Productos</Link></div>
            </>
    )
    
}