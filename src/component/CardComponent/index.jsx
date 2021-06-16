import './CardComponent.css';
import { ButtonComponent } from '../buttonComponent/ButtonComponent';
import { ButtonSigno } from '../buttonComponent/ButtonComponent';

export const CardComponent = (props) => {
    
    return (
        <div className="card">
            <h2>{props.ProductoList.nombre}</h2>
            <div>{props.ProductoList.precio}</div>
            <ButtonComponent text={"agregar al carrito"} />
            <ButtonSigno />

        </div>
    )

}