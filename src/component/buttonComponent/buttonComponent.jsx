import './ButtonComponent.css';

export const ButtonComponent = ({ text }) => {
    return (
        <button className="agregar">
            {text}
        </button>
    )
}
