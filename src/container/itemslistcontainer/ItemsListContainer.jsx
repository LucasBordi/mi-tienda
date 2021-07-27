import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemsList } from '../itemslist/ItemsList'
import { getFirestore } from '../../firebase/client';

export const ItemsListContainer = () => {
    const [items, setItems] = useState([]);
    const { category } = useParams()

    useEffect(() => {
        async function getData() {
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = await COLLECTION.get()
            const items = RESPONSE.docs.map(doc => { return { ...doc.data(), id: doc.id } })
            setItems(items);
            return RESPONSE
        }
        async function getProductsByCategory(category) {
            console.log("category " + category)
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = COLLECTION.where('category', '==', category);
            RESPONSE.get().then((r) => {
                if (r.size === 0) {
                    console.log('no hay resultados');
                    return;
                }
                setItems(r.docs.map(doc => doc.data()))
            })
            return RESPONSE
        }
        if (category === undefined) {
            getData();
        } else {
            getProductsByCategory(category);
        }
    }, [category])
    
    return (
        <div className="container row col-12">
            <ItemsList items={items} />
        </div>
    )
}

export default ItemsListContainer
