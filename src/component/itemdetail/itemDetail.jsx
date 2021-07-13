import React from 'react';
import { ItemCount } from '../itemcount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';

export const ItemDetail = ({ item }) => {

    const [listaProductos, setListaProductos] = useState()


    return (
        <>
            <div className="card row col-12 ">
                <div>
                    <h2>{item.title}</h2>
                    <h4 className="leader">{item.description}</h4>
                    <img className="imagen" src={item.pictureUrl} alt={item.title}></img>
                    <h4>Precio: $ {item.price}</h4>
                    <ItemCount stock={item.stock} initial={1} />
                </div>
            </div>
        </>
    )
}

