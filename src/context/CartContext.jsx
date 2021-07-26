import React, { createContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase/client";

export const CartContext = createContext();
const { Provider } = CartContext

const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [items, setItems] = useState([])

    const onAddTocart = (item) => {
        setCart([...cart, item])

    }

    return (
        <Provider value={onAddTocart, cart, setCart, items, setItems}>
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