import React from 'react';
import { ItemCount } from '../itemcount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';

export const ItemDetail = ({ img, title, price, description, stock }) => {
    const [cantidad, setCantidad] = useState(stock)
    const onAdd = (cant) => {
        console.log(`Se agregaron ${cant} productos`);
        setCantidad(cantidad)
    };

    return (
        <>
            <div className="container row col-12 ">
                <div className="card ">
                    <h2>{title}</h2>
                    <p className="leader">{description}</p>
                    <img className="imagen" src={img} alt={img}></img>
                    <h4>Precio: $ {price}</h4>
                    <ItemCount onAdd={onAdd} stock={stock} initial={1} />
                </div>
            </div>
        </>
    )
}
