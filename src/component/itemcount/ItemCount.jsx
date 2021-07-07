import { useState } from 'react';
import './ItemCount.css'
import { Link } from 'react-router-dom';

export function ItemCount({ stock, initial, onAdd }) {

    const [counter, setCounter] = useState(initial)

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
    if (stock == counter) {

        return (
            <>
                <Link to="/carrito">
                    <button className="button-agregar" variant="primary" >  Terminar Compra  </button>
                </Link>
                <button className="button-agregar" variant="secondary" onClick={() => setCounter(initial)}>  Cancelar Compra </button>
            </>
        )
    }
    //muestra en pantalla
    return (
        <>
            <div className="">
                <button className="input" onClick={restar}> - </button>
                <input type="number" className="input" value={counter}
                    onChange={onInputChange} initial={initial}></input>
                <button className="input" onClick={sumar}> + </button>
                <button className="button-agregar" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}