import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import './Checkout.css';

export const CheckOut = () => {
    const { createOrder } = useContext(CartContext);
    const context = useContext(CartContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    let items = context.cart.map(
        (obj) => {
            return {
                id: obj.item.id,
                title: obj.item.title,
                cantidad: obj.cantidad,
                price: obj.item.price,
            };
        }
    )

    return (
        <>
            <h3>REVISION DE SU PRODUCTOS</h3>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio por unidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.cart.map(
                            (obj) => {
                                return (
                                    <tr className="listado-productos col-10" key={obj.item.id}>
                                        <td> {obj.item.title} </td>
                                        <td> {obj.cantidad}</td>
                                        <td> $ {obj.item.price} </td>
                                        <td> $ {obj.item.price * obj.cantidad}</td>
                                    </tr>
                                );
                            }
                        )
                    }
                </tbody>
            </table>
            <div className="cart-button">Total: $ {context.precioTotal()}</div>
            <div>
                <h3>COMPLETE EL FORMULARIO PARA FINALIZAR SU COMPRA</h3>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre y Apellido"
                        onInput={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        onInput={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="1112345678"
                        onInput={(e) => { setPhone(e.target.value) }}
                    />
                </div>
                <button className="cart-button"
                    onClick={() => createOrder(name, phone, email, items)}
                    block={true}
                >
                    Finalizar Compra
                </button>
            </div>
            <Link className="cart cart-button" to="/">Volver al inicio</Link>
        </>
    );
};

