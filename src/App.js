import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeConteiner } from './component/conteiner/HomeConteiner';
import { NavbarComponent } from './component/navbarcomponent/NavBarComponent';
import Contacto from './component/contacto/Contacto';
import { CartWidge } from './component/cartwidget/CartWidget';
import { ItemDetailContainer } from './component/itemdetailcontainer/ItemDetailContainer';
import { ItemDetail } from './component/itemdetail/ItemDetail';


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HomeConteiner} greeting="holaaaaaaaaaa"/>
        <Route exact path="/productos" component={ItemDetailContainer}/>
        <Route path="/productos/:products_id" component={ItemDetail}></Route> 
        <Route path="/Contacto" component={Contacto} />
        <Route path="/Carrito" component={CartWidge} />
        <Route path="*" component={() => <h1>ERROR 404 !!! pagina no encontrada...</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
