import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../fonts/iconmoon.css';

export function CartWidget() {
    const { getTotalQty, cart } = useContext(CartContext)
    const [totalQty, setTotalQty] = useState(0);
  
    useEffect(() => {
      setTotalQty(getTotalQty())
    }, [cart])
  
    return (
      <Link to="/cart" className="cart-widget">
        <div className="icon-cart">:{totalQty}</div>
      </Link>
    )
  }