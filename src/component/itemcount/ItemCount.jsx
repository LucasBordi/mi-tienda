import { useState } from 'react';
import './ItemCount.css'
import { Link } from 'react-router-dom';

export function ItemCount({ stock, initial }) {
    const [counter, setCounter] = useState(initial)
    const [cantidad, setCantidad] = useState()
    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
            console.log(`esta sumando ${counter}`);
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            console.log(`estas restando ${counter}`);
        }
        stock++
        console.log(`esto esta en el menos ${counter}`);
    }
    const onInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue > stock) {
            setCounter(stock);
        } else if (inputValue < 0) {
            setCounter(1);
        } else {
            setCounter(inputValue);
        }
    }
    const onAdd = () => {
        setCantidad(counter)
        console.log("se agregó la siguiente cantidad de productos al carrito: " + counter);
        console.log("stock quedo en: " + (stock - counter))
    }
    //muestra en pantalla
    return (
        <>
            {
                stock >= cantidad
                    ? (
                        <>
                            <Link to="/cart">
                                <button className="d-block animated fadeIn" variant="primary" > Terminar compra  </button>
                            </Link>
                        </>
                    )
                    : (
                        <div className="">
                            <button className="input" onClick={restar}> - </button>
                            <input type="number" className="input" value={counter} onChange={onInputChange} initial={initial}></input>
                            <button className="input" onClick={sumar}> + </button>
                            <button className="button-agregar" onClick={onAdd}>Agregar al carrito</button>
                        </div>
                    )
            }
        </>
    )
}