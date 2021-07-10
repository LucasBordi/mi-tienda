import React from 'react';
import { ItemCount } from '../itemcount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
    return (
        <>
            <div className="card row col-12 ">
                <div>
                    <h2>{item.title}</h2>
                    <p className="leader">{item.description}</p>
                    <img className="imagen" src={item.pictureUrl} alt={item.title}></img>
                    <h4>Precio: $ {item.price}</h4>
                    <ItemCount stock={item.stock} initial={1} />
                </div>
            </div>
        </>
    )
}
