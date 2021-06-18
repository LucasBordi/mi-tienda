import React, { useState } from 'react';
import './ItemCount.css';


const lista = { nombre: `Producto-1`, precio: 3000, stock: 15 };
export const ItemCount = () => {


    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if (counter < lista.stock) {
            setCounter(counter + 1)
            console.log(`esta sumando ${counter}`);
        }
        
        console.log(`esto esta en el stock ${lista.stock}`);
    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            console.log(`esta restando ${counter}`);
        }
        
        console.log(`esto esta en el stock ${lista.stock}`);

    }

    const textNumer = (e) => {

        let value = (e.target.value)
        if (value > lista.stock) {
            setCounter(lista.stock)
        }
        else {
            setCounter(value)
            console.log(setCounter);
        }

    }
    const onAdd = () => {
        console.log(`Tenes ${counter} productos agregados al carrito`);
    }

    if (lista.stock == (0 || [])) {
        return (
            <>
                <div className="card">

                    <h2>{lista.nombre}</h2>
                    <div>{lista.precio}</div>
                </div>
            </>
        )

    }

    return (
        <>
            <div className="card">

                <h2>{lista.nombre}</h2>
                <div>{lista.precio}</div>

                <button className="input-group-list" onClick={sumar}> + </button>
                <input type="number" className="input-group" value={counter} stock={lista.stock}
                    onChange={textNumer} initial={1} ></input>
                <button className="input-group-list" onClick={restar}> - </button>
                <button onClick={onAdd}>Agregar al carrito</button>

            </div>
        </>
    )

}
