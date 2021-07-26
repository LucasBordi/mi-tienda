import { useState, useEffect } from 'react';
import { ItemDetail } from '../../component/itemdetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/client';

console.log("HOLA")
export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function waitForData(id) {
            console.log('id ' + id);

            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = await COLLECTION.where('id', '==', Number(id));
            RESPONSE.get().then((r) => {
                if (r.size === 0) {
                    console.log('no hay resultados')
                    return;
                }
                console.log('size ' + r.size)
                
                setItems(r.docs.map(doc => doc.data()))

            })
            console.log("esto es RESPONSE " + RESPONSE);
            console.log("esto es item " + items);
            return RESPONSE;
        }
        waitForData(id);
    }, [id])

    console.log(items)

    /*  useEffect(() => {
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
 */

    return (
        <div className="container row col-12">
            <ItemDetail item={items[0]} />
        </div>
    )
}
