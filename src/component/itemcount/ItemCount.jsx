import { useState, useContext } from 'react';
import './ItemCount.css'
import { CartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';

export function ItemCount({ initial, item }) {
    const [counter, setCounter] = useState(initial)

    const { addItem } = useContext(CartContext)

    const sumar = () => {
        if (counter < item.stock) {
            setCounter(counter + 1)
            console.log(`esta sumando ${counter + " " + item.title}`);
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            console.log(`estas restando ${counter + " " + item.title}`);
        }
        console.log(`esto esta en el menos ${counter}`);
    }
    const onInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue > item.stock) {
            setCounter(item.stock);
        } else if (inputValue < 0) {
            setCounter(1);
        } else {
            setCounter(inputValue);
        }
    }

    return (
        <>
            <div>
                <button className="button-agregar" onClick={restar}> - </button>
                <input type="text" className="button-agregar" value={counter} onChange={onInputChange} initial={initial}></input>
                <button className="button-agregar" onClick={sumar}> + </button>
            </div>
            <div>
                <button className="button-agregar" onClick={() => { addItem(item, counter) }} > Agregar al carrito </button>
                <button className="button-agregar"><Link className=" cart compra" to="/">Seguir comprando</Link></button>
            </div>
        </>
    )
}