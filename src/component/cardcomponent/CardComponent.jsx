import '../cardcomponent/Index.css';

export const CardComponent = ({ title, price, thumbnail, id }) => {
    return (
        <>
            <div className="card row col-12">
                <div>{id}</div>
                <h2>{title}</h2>
                <img className="imagen" src={thumbnail} />
                <div>{price}</div>
            </div>
        </>
    )
}