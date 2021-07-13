import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavbarComponent } from './component/navbarcomponent/NavBarComponent';
import { ItemsListContainer } from './container/itemslistcontainer/ItemsListContainer';
import Contacto from './component/contacto/Contacto';
import { CartWidget } from './component/cartwidget/CartWidget';
import { ItemDetailContainer } from './container/itemdetailcontainer/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <shopComponentContext>
        <BrowserRouter>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={ItemsListContainer} greeting="holaaaaaaaaaa" />
            <Route path="/category/:id" component={ItemsListContainer}></Route>
            <Route path="/item/:id" component={ItemDetailContainer}></Route>
            <Route path="/Contacto" component={Contacto} />
            <Route path="/Cart" component={CartWidget} />
            <Route path="*" component={() => <h1>ERROR 404 !!! pagina no encontrada...</h1>} />
          </Switch>
        </BrowserRouter>
      </shopComponentContext>
    </div>
  )
}

export default App;