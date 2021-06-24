import './App.css';
import { NavbarComponent } from './component/navbarcomponent/NavbarComponent';
import { HomeConteiner } from './component/conteiner/ItemListContainer';
import { CardComponent } from './component/cardcomponent/CardComponent';
import { useEffect, useState } from 'react';

function App() {

  /*
   async function getData(category) {
    const response = await fetch(
      'https://api.mercadolibre.com/sites/MLA/search?q=${category}');
    const data = await response.json();
    console.log(data);
    return data.results;
  }


  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const waitForData = async () => {
      let data = await getData('Zapatillas')//llamada a la api


      let aux = data.map(element => {
        return {
          title: element.title,
          price: element.price,
          img: element.thumbnail,
          id: element.id
        }
      });

      setProductos(aux);//espera a que carge los datos de la api
      //1.34hs
    }
    waitForData()
  }, [])

  if (productos.lenght > 0) {

    console.log(productos)
  }

  */
  return (
    <>
      <NavbarComponent />
      <HomeConteiner greeting={"hola, ¡ BIENVENIDOS a mi APP !"} />
    </>
  )
}



/*
<div className="container row col-12">
      {productos.map((element, index) => {
        console.log(productos);
        return (
          <>
            <span key={index}>
              <CardComponent id={element.id} title={element.title} img={element.img} price={element.price} />
            </span>
          </>
        )
      }
      )}
    </div>
  )
*/


export default App;
