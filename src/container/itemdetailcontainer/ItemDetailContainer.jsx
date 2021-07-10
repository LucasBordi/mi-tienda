import { useState, useEffect } from 'react';
import { ItemDetail } from '../../component/itemdetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState({});
    useEffect(() => {
        const waitForData = async () => {
            const response = await fetch('/json/products.json');
            const data = await response.json();
            const filteredProduct = await data.find(element => { return element.id == id });

            setTimeout(() => {
                setItem(filteredProduct);
            }, 100);
        }
        waitForData();
    }, [id])
    return (
        <div className="container row col-12">
            <ItemDetail item={item} />
        </div>
    )
}