import { React } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ title, description, price, img, stock }) => {

    return (
        <div className="card row col-12">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <img className="imagen" src={img} alt={img}></img>
            <h4>Precio: $ {price}</h4>
            <h5>Stock Disponible: {stock}</h5>
            <button className="button">
                <Link to={`/productos`}>
                    Ver Producto
                </Link>
            </button>
        </div>
    )
}
