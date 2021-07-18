import { React, useState, useContext } from 'react';
import './ItemDetail.css';
import { CartContext } from './../../context/CartContext';
import {ItemCount} from './../itemcount/ItemCount';




export const ItemDetail = (props) => {
    const cartContext = useContext(CartContext);
  
    const item = {
        id: props.id,
        category: props.item.category,
        description: props.item.description,
        pictureUrl: props.item.pictureUrl,
        price: props.item.price,
        stock: props.item.stock,
        title: props.item.title,
    };
    console.log(item);

    
        return (
            <>
                <div className="card row col-12 ">
                    <div>
                        <h2>{item.title}</h2>
                        <h4 className="leader">{item.description}</h4>
                        <img className="imagen" src={item.pictureUrl} alt={item.title}></img>
                        <h4>Precio: $ {item.price}</h4>
                        <ItemCount stock={item.stock} initial={1} item={item}/>
                    </div>
                </div>
            </>
        )  
}


