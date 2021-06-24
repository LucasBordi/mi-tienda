import '../items/ItemList'
export const Item = ({ title, price, img, id }) => {
    return (
        <>
            <div className="card row col-12">
                <div>{id}</div>
                <h2>{title}</h2>
                <img className="imagen" src={img}></img>
                <div>$ {price}</div>
            </div>
        </>
    )
}