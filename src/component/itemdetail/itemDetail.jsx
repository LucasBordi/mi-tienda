import React from 'react';
import { ItemCount } from '../itemcount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';

export const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState()
    const onAdd = (cant) => {
        console.log(`Se agregaron ${cant} productos`);
        setCantidad(cantidad)
    };

    return (
        <>
            <div className="card row col-12 ">
                <div>
                    <h2>{item.title}</h2>
                    <p className="leader">{item.description}</p>
                    <img className="imagen" src={item.pictureUrl} alt={item.title}></img>
                    <h4>Precio: $ {item.price}</h4>
                    <ItemCount onAdd={onAdd} stock={item.stock} initial={1} />
                </div>
            </div>
        </>
    )
}
