import { useState } from 'react';
import './ItemCount.css'
import { Link } from 'react-router-dom';

export function ItemCount({ stock, initial, item }) {
    const [counter, setCounter] = useState(initial)
    const [cantidad, setCantidad] = useState()   

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
            console.log(`esta sumando ${counter + " " + item.title}`);
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            console.log(`estas restando ${counter + " " + item.title}`);
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
        console.log("se agregó la siguiente cantidad de productos al carrito: " + counter + " " + item.title);
        console.log("stock quedo en: " + (stock - counter))
        //console.log("esto esta en set productos" +setProductos);
        
    };

    const reset = () => {
        setCantidad(counter - setCounter(1))
    }
    //muestra en pantalla
    return (
        <>
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
                            <button className="button-agregar" onClick={onAdd}> Agregar al carrito </button>
                        </div>
                    )
            }
        </>
    )
}