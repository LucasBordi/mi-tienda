import { useState, useEffect } from 'react';
import { Item } from '../item/Item';
import './ItemsList.css';

export function ItemsList() {
  const [productos, setProducts] = useState([]);
  useEffect(() => {
    fetch('json/products.json')
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setProducts(response);
        }, 2000)
      })
    console.log("esto esta en productos: " + { productos });
  }, []);
  return (
    <>
      <div className="container row col-12">
        {productos.map((element, index) => {
          return (
            <>
              <span key={index}>
                <Item id={element.id} title={element.title} img={element.pictureUrl}
                  price={element.price} stock={element.stock} />
              </span>
            </>
          )
        }
        )}
      </div>
    </>
  )
}