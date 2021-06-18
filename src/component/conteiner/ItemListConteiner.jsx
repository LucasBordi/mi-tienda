import './conteiner.css';
import logo from '../../logo.svg';
import { ItemCount } from '../ItemCount/ItemCount';


export const HomeConteiner = (props) => {

  return (
    <>
      <div className="App">
        <div>{props.greeting}</div>
        <header className="App-header">
          <ItemCount />
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