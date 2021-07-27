import { React } from 'react';
import './ItemDetail.css';
import {ItemCount} from './../itemcount/ItemCount';

export const ItemDetail = ({item}) => {

        return (
            <>
                <div className="card row col-12 ">
                    <div>
                        <h2>{item.title}</h2>
                        <h4 className="leader">{item.description}</h4>
                        <img className="imagen" src={item.pictureUrl} alt={item.title}></img>
                        <h4>Precio: $ {item.price}</h4>
                        <ItemCount initial={1} item={item} />
                    </div>
                </div>
            </>
        )  
}


