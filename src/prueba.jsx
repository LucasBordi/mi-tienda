import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar'
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ShopContext from './contexts/ShopContext'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <ShopContext.Provider value={cart} >
        <BrowserRouter>
          <Navbar/>
            <Switch>
            {/* Banner Principal */}
            {/* lista de mas importantes */}
            <Route exact path="/" component={ItemsListContainer}/>
            <Route path="/category/:id" component={ItemsListContainer}/>
            <Route path="/item/:id"component={ItemDetailContainer}/>
            {/* Secciones */}
            </Switch>
          {/* Footer robert martinez */}
        </BrowserRouter>
      </ShopContext.Provider>
    </div>
  );
}

export default App;


//mercado pago
async function generarLinkDePago() {
  const productsToMP = carrito.map((element) => {
    let nuevoElemento = {
      title: element.nombre,
      description: element.descripcion,
      picture_url: element.img,
      category_id: element.id,
      quantity: Number(element.cantidad),
      currency_id: "ARS",
      unit_price: Number(element.precio),
    };
    return nuevoElemento;
  });
  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer Aca Va el token de su mercado pago",
      },
      body: JSON.stringify({
        items: productsToMP,
      }),
    }
  );
  const data = await response.json();
  window.open(data.init_point, "_blank");
}

