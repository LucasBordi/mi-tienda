import './App.css';
import { HomeConteiner } from './component/conteiner/HomeConteiner';
import { NavbarComponent } from './component/navbarcomponent/NavBarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <HomeConteiner greeting={"hola, ¡ BIENVENIDOS a mi APP !"} />
    </>
  )
}

export default App;
