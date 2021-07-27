import { Item } from '../../component/item/Item';

export const ItemsList = ({ items }) => {

  return (
    <>
      <div className="container row col-12">
        {items.map((item, index) =>
          <Item item={item} key={index} />
        )
        }
      </div>
    </>
  )
}