import { useState } from 'react';
import './Index.css'

export function ItemCount({ stock, initial }) {
    const lista = { nombre: `Producto-1`, precio: 3000 };
    const [counter, setCounter] = useState(1)
    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
            console.log(`esta sumando + ${counter}`);
        }
        stock--;
        console.log(`Esto es el counter ${counter}`);
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            console.log(`esta restando ${counter}`);
        }
        stock++
        console.log(`asi esta el stock ${stock}`);
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
                <div className="card">
                    <h2>{lista.nombre}</h2>
                    <div>${lista.precio}</div>
                </div>
            </>
        )
    }
    if (stock > 0) {
        return (
            <>
                <div className="card">
                    <div>{lista.nombre}</div>
                    <div>${lista.precio}</div>
                    <button className="input-group-list" onClick={sumar}> + </button>
                    <input type="number" className="input-group" value={counter}
                        onChange={textNumer} initial={initial}></input>
                    <button className="input-group-list" onClick={restar}> - </button>
                    <button className="button-agregar" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </>
        )
    }
}