import './conteiner.css';
import logo from '../../logo.svg';
import { CardComponent } from '../../component/CardComponent/index';



export const HomeConteiner = (props) => {
  const lista = [{ id: 1, nombre: `Producto-1`, precio: 300 },
  { id: 2, nombre: `Producto-2`, precio: 300 },
  { id: 3, nombre: `Producto-3`, precio: 300 }];
  return (
    <>
      <div className="App">
        <div>{props.greeting}</div>
        <header className="App-header">
        
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