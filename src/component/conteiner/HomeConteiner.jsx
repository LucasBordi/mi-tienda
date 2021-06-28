import './HomeConteiner.css';
import { Items } from '../items/ItemsList';

export const HomeConteiner = (props) => {
  return (
    <>
      <div className="App">
        <div>{props.greeting}</div>
        <header className="App-header">
          <Items/>
        </header>
      </div>
    </>
  )
}