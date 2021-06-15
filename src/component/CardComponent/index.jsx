import './CardComponent.css';

export const CardComponent = (props) => (
    <div className="card">
        <h2>{props.ProductoList.nombre}</h2>
        <div>{props.ProductoList.precio}</div>
    </div>
)