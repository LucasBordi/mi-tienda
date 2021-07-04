import './HomeConteiner.css';
import { ItemsList } from './../items/ItemsList';

export const HomeConteiner = (props) => {
  return (
    <>
      <div className="App">
        <div>{props.greeting}</div>
        <header className="App-header">
          <ItemsList />
        </header>
      </div>
    </>
  )
}