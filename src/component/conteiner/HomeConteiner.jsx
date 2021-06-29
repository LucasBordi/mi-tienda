import './HomeConteiner.css';
import { Items } from '../items/ItemsList';
import { ItemDetailContainer } from './../itemdetailcontainer/ItemDetailContainer';


export const HomeConteiner = (props) => {
  return (
    <>
      <div className="App">
        <div>{props.greeting}</div>
        <header className="App-header">
          <ItemDetailContainer/>
        </header>
      </div>
    </>
  )
}