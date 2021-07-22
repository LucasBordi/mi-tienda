import React, { createContext, useState } from "react";


export const CartContext = createContext();
const { Provider } = CartContext

const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    

    const onAdd = (item) => {
        setCart([...cart, item])
    }

    return (
        <Provider value={onAdd, cart, setCart}>
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
            const RESPONSE = await COLLECTION.doc("nombre del elemento creado").get();
            setListProducts(RESPONSE.data());
        }
        getData();
    }, [])

*/