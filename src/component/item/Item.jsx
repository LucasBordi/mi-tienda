import { React } from 'react';
import './Item.css';

export const Item = ({ title, price, img, stock }) => {

    return (
        <div className="card row col-12">
            <h2>{title}</h2>
            <img className="imagen" src={img} alt={img}></img>
            <h4>Precio: $ {price}</h4>
            <h5>Stock Disponible: {stock}</h5>
           
        </div>
    )
}
