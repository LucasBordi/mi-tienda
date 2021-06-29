import React from 'react';
import { ItemCount } from './../itemcount/ItemCount';

export const ItemDetail = ({ title, description , price, img, id, stock }) => {

    console.log({stock});
    return (
        <>
            <div className="card row col-12">
                <div>{id}</div>
                <h2>{title}</h2>
                <div>{description}</div>
                <img className="imagen" src={img} />
                <h4>Precio: $ {price}</h4>
                <ItemCount stock={stock}/>
               

            </div>
        </>
    )
}
