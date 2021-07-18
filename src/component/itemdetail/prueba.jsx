/*
//ine maroc
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../componentes/itemlist/ItemList";
import { StoreContext } from "../context/StoreContext";


function ItemListContainer () {
         
    const {listItems} = useContext(StoreContext);
    
    const {category} = useParams(null);
    const [items, setItems] = useState([]);
    

    useEffect (() => {
        //if the url have a category then filter if not show all the items
        let p = category ? listItems.filter (element => element.category === category) : listItems;
        setItems(p);          
        
    },[listItems, category]);
      

    return (

    <>
    
    <ItemList items={items}></ItemList>
    
    </>
       

);
}


export default ItemListContainer;
*/


//luciano cisnero
export const ItemListContainer = () => {
    const { listProducts } = useContext(ProductsContext);
    const [brandProducts, setBrandProducts] = useState([]);
    const { categories } = useParams();
    let products = [];

    useEffect (() => {
        const waitForData = () => {
            let filterBrand = listProducts.results.filter(products => products.attributes[0].value_name === categories)
            console.log(filterBrand);
            const products = filterBrand.map(element => {
                console.log(element);
                return {
                    id: element.id,
                    title: element.title,
                    brand: element.attributes[0].value_name,
                    price: element.price,
                    img: element.thumbnail
                }
            })
            setBrandProducts(products);
        }
        waitForData();
    }, [categories, listProducts]);
    
}
