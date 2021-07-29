import { useState, useEffect } from 'react';
import { ItemDetail } from '../../component/itemdetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/client';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState([id]);

    useEffect(() => {
        async function getData() {
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = await COLLECTION.get()
            const SELECTED_ITEM = RESPONSE.docs.find(e => e.id === id)
            setItem(SELECTED_ITEM.data());
        }
        getData()
    }, [])

    return (
        <div className="container row col-12">
            <ItemDetail item={item} id={id} />
        </div>
    )
}
