import React, { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import './checkout.css';

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
            

            <h3>REVISION DE SU COMPRA</h3>
            <div className="">
                <h3 className="title-productos">
                    <span >Producto</span>
                    <span>Cantidad</span>
                    <span>Precio por unidad</span>
                    <span>Subtotal:</span>
                </h3>
                {
                    context.cart.map(
                        (obj) => {
                            return (
                                <div className="listado-productos col-10" key={obj.item.id}>
                                    <span> {obj.item.title} </span>
                                    <span> {obj.cantidad}</span>
                                    <span> $ {obj.item.price} </span>
                                    <span> $ {obj.item.price * obj.cantidad}</span>
                                </div>
                            );
                        }
                    )
                }
                <div className="checkout-order__total">Total: $ {context.precioTotal()}</div>
            </div>
            <button className="cart-button"
                onClick={() => createOrder(name, phone, email)}
                block={true}
            >
                Finalizar Compra
            </button>

        </>

    );
};

