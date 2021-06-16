import './ButtonComponent.css';

export const ButtonComponent = ({ text }) => {

    return (
        <button className="agregar">
            {text}
        </button>
    )
}

export const ButtonSigno = ({ }) => {

    return (
        <section>
            <button className="signo">{" + "}</button>

            <button className="signo">{" - "}</button>
        </section>
    )
}