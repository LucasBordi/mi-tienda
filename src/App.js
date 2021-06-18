import './App.css';
import { NavbarComponent } from './component/navbar/Navbar';
import { HomeConteiner } from './component/conteiner/ItemListConteiner';


function App() {
  return (
    <>
      <NavbarComponent/>
      <HomeConteiner greeting={"hola, ¡ BIENVENIDOS a mi APP !"} />
    </>
  );
}

export default App;
