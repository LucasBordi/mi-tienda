import { useContext, useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const { cart, Limpiar, quitarItem, precioTotal } = useContext(CartContext);

    return (
        !!cart.length
            ? <div className="container col-12 cart" >
                {
                    cart.map(
                        obj => {
                            return (
                                <div className="cart-item" key={obj.item.id}>
                                    <h2>{obj.item.title}</h2>
                                    <button>+</button>
                                    <span>Cantidad: {obj.cantidad}</span>
                                    <button>-</button>
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
                <button className="cart-button" onClick={Limpiar}>Vaciar Carrito</button>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre"
                        onInput={(e) => { setName(e.target.value) }}
                    />
                    <input
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        onInput={(e) => { setEmail(e.target.value) }}
                    />
                    <input
                        type="text"
                        placeholder="1112345678"
                        onInput={(e) => { setPhone(e.target.value) }}
                    />
                    <button className="cart-button"
                        onClick={() => CartContext.createOrder({ name, phone, email })}
                        block={true}
                    >
                        Confirmar Compra
                    </button>
                </div>

            </div>
            : <div className="cart-button"><Link className="cart" to="/">Agregar Productos</Link></div>
    )

}