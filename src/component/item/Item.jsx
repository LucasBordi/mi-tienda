import { React } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {

    return (
        <div className="card">
            <h2>{item.title}</h2>
            <img className="imagen" src={item.pictureUrl} alt={item.title}></img>
            <h4>Precio: $ {item.price}</h4>
            <h5>Stock Disponible: {item.stock}</h5>
            <button className="button">
                  <Link className="button-cart" to={`/item/${item.id}`}>
                    ver producto
                  </Link>
                </button>
        </div>
    )
}
