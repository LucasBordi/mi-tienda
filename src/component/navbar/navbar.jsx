import './navbar.css';
import { Cardwidge } from "./CardWidge"


export const NavbarComponent = () => {
    return (
        <nav className="row navbar navbar-expand-lg  styleNavbar" >
            <a className="navbar-brand text" href="#"><Cardwidge /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="barra collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <a className="nav-link text" href="#">Productos de Bellezas</a>
                    </li>
                    <li>
                        <a className="nav-link text" href="#">Cremas</a>
                    </li>
                    <li>
                        <a className="nav-link text" href="#">Perfume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text" href="#" tabindex="-1" aria-disabled="true">Consultas</a>
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