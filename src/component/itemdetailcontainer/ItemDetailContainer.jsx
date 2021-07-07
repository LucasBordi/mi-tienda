import { useState, useEffect } from 'react';
import { ItemDetail } from '../itemdetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const { productos_id } = useParams()
    const [productos, setProductos] = useState([{ productos_id }]);
    useEffect(() => {
        fetch(`json/products.json`)
            .then(response => response.json())
            .then(response => setProductos(response))
        console.log(productos);
        console.log({ productos_id });
    }, [{ productos_id }]);

    return (
        <>
            <div className="container row col-12">
                {
                    productos.map((element, index) => {
                        return (
                            <>
                                <span key={index}>
                                    <ItemDetail id={element.id} title={element.title} price={element.price}
                                        stock={10} img={element.pictureUrl}
                                        description={element.description} />
                                </span>
                            </>
                        )
                    }
                    )
                }
            </div>
        </>
    )
}