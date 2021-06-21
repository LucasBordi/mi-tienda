import './App.css';
import { NavbarComponent } from './component/navbarcomponent/NavbarComponent';
import { HomeConteiner } from './component/conteiner/ItemListContainer';

function App() {
  return (
    <>
      <NavbarComponent />
      <HomeConteiner greeting={"hola, ¡ BIENVENIDOS a mi APP !"} />
    </>
  );
}

export default App;
