import React from 'react';
import { ItemCount } from '../itemcount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({pictureUrl, title, price, description }) => {
    return (
        <>
        <div className="container row col-12 ">
            <div className="card ">
                <h2>{title}</h2>
                <p className="leader">{description}</p>
                <img className="imagen" src={pictureUrl} alt={pictureUrl}></img>
                <h4>Precio: $ {price}</h4>
                <ItemCount stock={10} initial={1}/>
            </div>
        </div>
        </>
    )
}
