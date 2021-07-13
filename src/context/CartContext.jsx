import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const ShopComponentContext = ({ Children }) => {


    const [listProducts, setListProducts] = useState([])
    const [cart, setCart] = useState([])

 

    return <ShopComponentContext.Provider value={{ listProducts,  }}>
        {Children}
    </ShopComponentContext.Provider>

}


 /*
 ver para firebase
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