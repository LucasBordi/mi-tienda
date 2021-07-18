import { createContext, useState } from "react";


export const CartContext = createContext();

function CartProvider({children}) {

    const [shoppingItem, setShoppingItem] = useState([])
    const [cart, setCart] = useState([])



    

    return <CartProvider.Provider value={{ shoppingItem }}>
       {children}
    </CartProvider.Provider>

}

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