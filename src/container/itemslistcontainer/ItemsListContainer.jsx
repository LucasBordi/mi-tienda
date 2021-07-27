import { React, useEffect, useState,useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ItemsList } from '../itemslist/ItemsList'
import { getFirestore } from '../../firebase/client';
import { CartContext } from './../../context/CartContext';

export const ItemsListContainer = () => {

//const{item}=useContext(CartContext)

    const [items, setItems] = useState([]);
    const { category } = useParams()
    
    useEffect(() => {
         async function getData() {
             const DB = getFirestore();
             const COLLECTION = DB.collection("productos")
             const RESPONSE = await COLLECTION.get()
             setItems(RESPONSE.docs.map(element => element.data()));
             return RESPONSE
         }
         async function getProductsByCategory(category) {
             console.log("category "+ category)
             const DB = getFirestore();
             const COLLECTION = DB.collection("productos")
             const RESPONSE= COLLECTION.where('category', '===', category);
            
             RESPONSE.get().then((r) => {
                 if(r.size === 0) {
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

        console.log("esto es items "+items);
   
   
        // ESTO ESTABA ANTES DE FIREBASE
    /*
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
        */
           // ANTES DEL FIREBASE
        
    return (
        <div className="container row col-12">
            <ItemsList items={items} />
        </div>
    )
}

export default ItemsListContainer
