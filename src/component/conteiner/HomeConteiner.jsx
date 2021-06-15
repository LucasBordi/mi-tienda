import './conteiner.css';
import logo from '../../logo.svg';
import { CardComponent } from '../CardComponent/index';
import { buttonComponent } from '../buttonComponent/buttonComponent';


export const HomeConteiner = () => {
  const lista = [{ id: 1, nombre: `Producto-1`, precio: 300 },
  { id: 2, nombre: `Producto-2`, precio: 300 },
  { id: 3, nombre: `Producto-3`, precio: 300 }];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <CardComponent ProductoList={lista[0]} />
          <CardComponent ProductoList={lista[1]} />
          <CardComponent ProductoList={lista[2]} />
          <buttonComponent/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>


    </>

  )


}