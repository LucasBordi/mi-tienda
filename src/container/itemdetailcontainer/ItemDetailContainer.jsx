import { useState, useEffect, useContext } from 'react';
import { ItemDetail } from '../../component/itemdetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/client';
import { CartContext } from './../../context/CartContext';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const { getData } = useContext(CartContext);
    const [item, setItem] = useState([id]);

    useEffect(() => {
        async function getData() {
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = await COLLECTION.get()
            setItem(RESPONSE.docs.map(element => element.id === Number(id)));

        }
        getData()
    }, [])


    /* useEffect(() => {
         async function waitForData(id) {
             console.log('id ' + id);
 
             const DB = getFirestore();
             const COLLECTION = DB.collection("productos")
             const RESPONSE = await COLLECTION.where('id', '==', Number(id));
             RESPONSE.get().then((r) => {
                 if (r.size === 0) {
                     console.log('no hay resultados')
 
                 }
                 else {
                     console.log('size ' + r.size)
                     setItem(r.docs.map(doc => doc.data()))
                     setItem(item)
                 }
 
             })
             console.log("esto es RESPONSE " + RESPONSE);
             console.log("esto es item " + item);
             // return RESPONSE;
         }
         waitForData(id);
     }, [id])
 
     console.log(item)
 
        useEffect(() => {
              const waitForData = async () => {
               //  const DB = getFirestore();
                // const data = DB.collection("productos")
                  const response = await fetch('/json/products.json');
                  const data = await response.json();
                  const filteredProduct = await data.find((element => { return element.id == id }));
      
                  setTimeout(() => {
                      setItem(filteredProduct);
                  }, 100);
              }
              waitForData();
          }, [id])
      */

    return (
        <div className="container row col-12">
            <ItemDetail item={item} id={id} />
        </div>
    )
}
