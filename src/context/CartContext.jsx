import React, { createContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase/client";

export const CartContext = createContext();
const { Provider } = CartContext

const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [items, setItems] = useState([])  

    useEffect(() => {
        async function getData() {
          const db = getFirestore();
          const COLLECTION = db.collection('item');
          const RESPONSE = await COLLECTION.get();
          let items = RESPONSE.docs.map((doc) => { return {...doc, id: doc.id } });
          setItems(items);
          console.log(COLLECTION);
        }
        console.log("Items desde Firebase: ",items);
        getData();
      }, [])
    
      const addItem = (item, cantidad) => {
        const index = cart.findIndex(obj => obj.item.id === item.id)
        if (index === -1) {
          setCart([...cart, { item, cantidad }])
        }
        else {
          setCart(() => {
            cart[index].cantidad = cantidad
            return [...cart]
          })
        }
      }
    
      function Limpiar() {
        setCart([])
      }
    
      function quitarItem(id) {
        const filteredCart = cart.filter((obj) => obj.item.id !== id);
        setCart(filteredCart);
      }
    
      function precioTotal() {
        const valor = cart.reduce((acumulador, obj) => {
          return (acumulador += (Number(obj.item.price) * Number(obj.cantidad)))
        }, 0)
        return valor
      }
    
      const getTotalQty = () => {
        let qty = 0;
        cart.forEach(obj => {
          let cantidad = obj.cantidad;
          qty += cantidad;
        });
        return qty;
      }
    
      return (
        <Provider value={{ cart, addItem, Limpiar, quitarItem, precioTotal, getTotalQty, items}}>
          {children}
        </Provider>
      )


}

export default CustomProvider;

/*
 ver para
 useEffect(() => {
        async function getData() {
            const DB = getFirestore();
            const COLLECTION = DB.collection("productos")
            const RESPONSE = await COLLECTION.docs("nombre del elemento creado").get();
            setListProducts(RESPONSE.data());
        }
        getData();
    }, [])

*/