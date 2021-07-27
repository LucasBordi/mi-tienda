import { useState, useContext } from 'react';
import './ItemCount.css'
import { Link } from 'react-router-dom';
import { CartContext } from './../../context/CartContext';

export function ItemCount({ initial, item }) {
    const [counter, setCounter] = useState(initial)

    const { addItem, quitarItem } = useContext(CartContext)

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


    //muestra en pantalla
    return (
        <div>
            <button className="button-agregar" onClick={restar}> - </button>
            <input type="text" className="button-agregar" value={counter} onChange={onInputChange} initial={initial}></input>
            <button className="button-agregar" onClick={sumar}> + </button>
            <button className="button-agregar" onClick={() => { addItem(item, counter) }} > Agregar al carrito </button>
        </div>
        /*<>
            {
                stock >= cantidad
                    ? (
                        <>
                            <Link to="/cart">
                                <button className="button-agregar" variant="primary" > Terminar compra </button>
                            </Link>
                            <button className="button-agregar" variant="primary" onClick={reset} > Cancelar Compra </button>
                        </>
                    )
                    : (
                        <div className="">
                            <button className="button-agregar" onClick={restar}> - </button>
                            <input type="text" className="button-agregar" value={counter} onChange={onInputChange} initial={initial}></input>
                            <button className="button-agregar" onClick={sumar}> + </button>
                            <button className="button-agregar" onClick={()=>{addItem(item,counter)}} > Agregar al carrito </button>
                        </div>
                    )
            }
        </>*/
    )
}