import { React, useEffect, useState } from 'react'
import { ItemsList } from './../items/ItemsList';

export const ItemsListContainer = () => {
  
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('json/products.json')
            .then((response) => response.json())
            .then((response) => {
                setTimeout(() => {
                    setItems(response);
                }, 2000)
            })
        console.log("esto esta en productos: " + { items });
       
    }, []);

    return (
        <div>
            <ItemsList items={items} />
        </div>
    )
}

export default ItemsListContainer
