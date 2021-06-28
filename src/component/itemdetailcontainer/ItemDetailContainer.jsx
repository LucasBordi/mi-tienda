import { useState, useEffect } from 'react';
import { Item } from '../item/Item';



export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch("json/products.json")
            .then((response) => response.json())
            .then((datos) => {
                setTimeout(() => {
                    setProductos(datos);
                }, 2000)
            })
    }, []);


    return (

        <div className="container row col-12">
            {productos.map((element, index) => {
                console.log(productos);
                return (
                    <>
                        <span key={index}>
                            <Item title={element.title} img={element.pictureUrl} price={element.price} />
                           
                        </span>
                    </>
                )
            }
            )}
        </div>

    )
}