
import '../../fonts/iconmoon.css';
import './NavBarComponent.css';
import { Link } from "react-router-dom";


export const NavbarComponent = () => {

    return (
        <nav className="row navbar navbar-expand-lg  styleNavbar" >
            <Link to={`/`} className="navbar-brand text">
                <img src="../../../imagenes/Marca.jpg" alt="Logo" className="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="barra collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link to={`../productos`} className="nav-link texto">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`../contacto`} className="nav-link texto" tabindex="-1"
                            aria-disabled="true">Contactos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="../Carrito" className="nav-link texto icon-cart " tabindex="-1" aria-disabled="true"> Carrito</Link>
                    </li>
                </ul>
                <form className="busqueda form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar...</button>
                </form>
            </div>
        </nav>
    )
}
