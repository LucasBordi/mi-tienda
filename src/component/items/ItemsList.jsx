import { Item } from '../item/Item';
import './ItemsList.css';
import { Link } from 'react-router-dom';



export const ItemsList = ({ items }) => {

  return (
    <>
      <div className="container row col-12">
        {items.map((element, index) => {
          return (
            <>
              <span key={index}>
                <Item id={element.id} title={element.title} img={element.pictureUrl}
                  price={element.price} stock={element.stock} description={element.description} />
                <button className="button">
                  <Link to={`productos/${element.id, element.title, element.price, element.stock}`}>
                    ver producto
                  </Link>
                </button>
              </span>

            </>
          )
        }
        )}
      </div>
    </>
  )
}