import '../../utils/const';
import { useState, useEffect } from 'react';
import { Item } from '../item/Item';

export function Items() {
  const items = [{
    id: 1,
    title: "Perfume Lavvan",
    pictureUrl: "../../../imagenes/Perfume-lavvan.jpeg",
    price: 2000
  },
  {
    id: 2,
    title: "Perfume Hombre",
    pictureUrl: "../../../imagenes/Perfume-kiaka-Hombre.jpeg",
    price: 3000
  },
  {
    id: 3,
    title: "Perfume Mujer",
    pictureUrl: "../../../imagenes/Perfume-kiaka-Mujer.jpeg",
    price: 3500
  }
  ]
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const waitForData = async () => {
      let data = await items//llamada al array
      let aux = data.map(element => {
        return {
          title: element.title,
          price: element.price,
          img: element.pictureUrl,
          id: element.id
        }
      });
      setProductos(aux);//espera a que carge los datos del array
    }
    waitForData()
  }, [])
  if (productos.lenght > 0) {
    console.log(productos)
  }
  return (
    <>
      <div className="container row col-12">
        {productos.map((element,index) => {
          console.log(productos);
          return (
            <>
              <span key={index}>
                <Item id={element.id} title={element.title} img={element.pictureUrl} price={element.price} />
              </span>
            </>
          )
        }
        )}
      </div>
    </>
  )
}