import { useState, useEffect } from 'react';
import { ItemDetail } from '../itemdetail/itemDetail';

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch("json/products.json")
            .then((response) => response.json())
            .then((productos) => {
                setTimeout(() => {
                    setProductos(productos[10]);
                    console.log("esto tiene productos:" + productos);
                }, 2000)
            })
    }, []);


    return (
        <div className="container row col-12">
            <ItemDetail id={productos.id} title={productos.title} img={productos.pictureUrl}
                description={productos.description} stock={10} />
        </div>

    )
}