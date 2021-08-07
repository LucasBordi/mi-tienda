import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../fonts/iconmoon.css';
import './cartWidget.css';

export function CartWidget() {
  const context = useContext(CartContext);
  const { getTotalQty, cart } = useContext(CartContext)
  const [active, setActive] = useState(false);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    setTotalQty(getTotalQty())
  }, [cart])

  const capturarClick = () => {
    setActive(!active);
  };

  const desactivarCart = () => {
    setTimeout(() => setActive(false), 500);
  };

  return (
    <div className="cart-widget">
      <button className="icon-cart" onClick={capturarClick} onBlur={desactivarCart}>
        :{totalQty}
      </button>
      <div className={`cart-container ${active ? 'active' : ''}`}>
        <h5>LISTA DE PRODUCTOS</h5>
        <ul>
          {
            context.cart.length === 0
              ? <div >Carrito Vacio</div>
              : context.cart.map(
                (obj) => {
                  return (
                    <li key={obj.item.id}>
                      <span>{obj.item.title}</span>
                      <span>{obj.cantidad}</span>
                    </li>
                  );
                }
              )
          }
        </ul>
        <Link to="/cart" className=" cart cart-button">VER CARRITO</Link>

      </div>
    </div>
  );
}
