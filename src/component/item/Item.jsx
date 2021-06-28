import React from 'react';
import './Item.css';
import { ItemCount } from './../itemcount/ItemCount';

export const Item = ({ title, price, img, id, stock }) => {
    return (
        <>
            <div className="card row col-12">
                <div>{id}</div>
                <h2>{title}</h2>
                <img className="imagen" src={img} />
                <h4>Precio: $ {price}</h4>
                <h5>Stock Disponible: {stock}</h5>
                <ItemCount stock={stock} />
                <button className="button">Ver Producto</button>
            </div>
        </>
    )
}
