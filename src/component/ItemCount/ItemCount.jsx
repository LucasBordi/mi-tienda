import { useState } from 'react';
import './ItemCount.css'

export function ItemCount({ stock, initial }) {

    const [counter, setCounter] = useState(1)
    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
            console.log(`esta sumando ${counter}`);
        }
        stock--;
        console.log(`Esto es el counter ${stock}`);
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            console.log(`estas restando ${counter}`);
        }
        stock ++
        console.log(`esto esta en el menos ${counter}`);
    }
    const textNumer = (e) => {
        let value = (e.target.value)
        if (value > stock) {
            setCounter(stock)
        }
        else {
            setCounter(value)
            console.log(setCounter);
        }
    }
    const onAdd = () => {
        console.log("se agregó la siguiente cantidad de productos al carrito: " + counter);
        console.log("stock quedo en: " + (stock - counter))
    }
    if (stock == 0) {
        return (
            <>
                <div className="">
                    <div>No disponemos de stock por el momento</div>
                </div>
            </>
        )
    }
    if (stock > 0) {
        return (
            <>
                <div className="">
                    <button className="input" onClick={sumar}> + </button>
                    <input type="number" className="input" value={counter}
                        onChange={textNumer} initial={initial}></input>
                    <button className="input" onClick={restar}> - </button>
                    <button className="button-agregar" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </>
        )
    }
}