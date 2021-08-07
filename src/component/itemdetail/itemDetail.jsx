import React from 'react';
import { ItemCount } from '../itemcount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ id,title, price, img, stock, description }) => {
    
    return (
        <>
            <div className="card row col-12">
                <h2>title: {title}</h2>
                <h5>{id}</h5>
                <h4>description: {description}</h4>
                <img className="imagen" src={img} alt={img}></img>
                <h4>Precio: $ {price}</h4>
                <h5>Stock Disponible: {stock}</h5>
                <ItemCount stock={10} initial={1} />
            </div>

        </>
    )
}
