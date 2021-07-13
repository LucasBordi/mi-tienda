import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemsList } from '../itemslist/ItemsList';


export const ItemsListContainer = () => {
    


    const [items, setItems] = useState([]);
    let { id } = useParams()

    async function getProducts() {
        const response = await fetch('/json/products.json');
        const data = await response.json();
        return data;
    }

    async function getProductsByCategory(category) {
        const response = await fetch('/json/products.json');
        const data = await response.json();
        const filteredProducts = data.filter(element => element.category === category);
        return filteredProducts;
    }

    useEffect(() => {
        const waitForData = async () => {
            let data;
            if (!!id) {
                data = await getProductsByCategory(id)
            } else {
                data = await getProducts();
            }

            setTimeout(() => {
                setItems(data);
            }, 200);
        }
        waitForData();
    }, [id])


    return (
        <div className="container row col-12">
            <ItemsList items={items} />
        </div>
    )
}
export default ItemsListContainer
