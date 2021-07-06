import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeConteiner } from './component/conteiner/HomeConteiner';
import { NavbarComponent } from './component/navbarcomponent/NavBarComponent';
import Contacto from './component/contacto/Contacto';
import { CartWidge } from './component/cartwidget/CartWidget';
import { ItemsListContainer } from './component/itemslistcontainer/ItemsListContainer';
import { ItemDetailContainer } from './component/itemdetailcontainer/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={HomeConteiner} greeting="holaaaaaaaaaa" />
            <Route exact path="/Productos" component={ItemsListContainer} />
            <Route path="/productos/:productos_id" component={ItemDetailContainer}></Route>
            <Route path="/Contacto" component={Contacto} />
            <Route path="/Carrito" component={CartWidge} />
            <Route path="*" component={() => <h1>ERROR 404 !!! pagina no encontrada...</h1>} />
          </Switch>
        </BrowserRouter>
      </>
    </div>
  )
}

export default App;
