import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavbarComponent } from './component/navbarcomponent/NavBarComponent';
import { ItemsListContainer } from './container/itemslistcontainer/ItemsListContainer';
import Contacto from './component/contacto/Contacto';
import { ItemDetailContainer } from './container/itemdetailcontainer/ItemDetailContainer';
import CustomProvider from './context/CartContext';
import { Cart } from './container/cartContainer/Cart';
import { CheckOut } from './component/checkout/checkout';

function App() {

  return (
    <div className="App">
      <CustomProvider>
        <BrowserRouter>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={ItemsListContainer} greeting="holaaaaaaaaaa" />
            <Route path="/category/:category" component={ItemsListContainer}></Route>
            <Route path="/item/:id" component={ItemDetailContainer}></Route>
            <Route path="/Contacto" component={Contacto} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Checkout" component={CheckOut} />
            <Route path="*" component={() => <h1>ERROR 404 !!! pagina no encontrada...</h1>} />
          </Switch>
        </BrowserRouter>
      </CustomProvider>
    </div>
  )
}

export default App;