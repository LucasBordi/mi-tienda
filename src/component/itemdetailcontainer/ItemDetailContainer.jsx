import { useState, useEffect } from 'react';
import { ItemDetail } from '../itemdetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router';

export const ItemDetailContainer = () => {
    const { products_id } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('json/products.json')
            .then(data => data.json())
            .then(data => setItem(data))
        console.log(item);
        console.log(products_id);
    }, []);

    return (
        <div className="container row col-12">
        {
            item.map(element => {
                return (
                    <ItemDetail title={element.title} price={element.price}
                        stock={element.stock} pictureUrl={element.pictureUrl}
                        description={element.description} />
                )
            }
            )
        }
        </div>
    )
}