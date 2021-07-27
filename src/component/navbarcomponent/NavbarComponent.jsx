import '../../fonts/iconmoon.css';
import './NavBarComponent.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore } from '../../firebase/client';
import { CartWidget } from '../cartwidget/CartWidget';

export const NavbarComponent = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/json/categories.json')
            .then((response) => response.json())
            .then((response) => {
                setTimeout(() => {
                    setCategories(response);
                    console.log(response);
                }, 10)
            })
    }, []);

    return (
        <nav className="row navbar navbar-expand-lg  styleNavbar" >
            <Link to={`/`} className="navbar-brand text">
                <img src={"./../imagenes/Marca.jpg"} alt="Logo" className="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="barra collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        !!categories.length
                            ? categories.map((category, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/category/${category}`} className="nav-link texto">{category}</Link>
                                    </li>
                                )
                            })
                            : 'Cargando'
                    }
                </ul>
                <Link to={`../contacto`} className="nav-link texto" tabindex="-1"
                    aria-disabled="true">Contactos
                </Link>
                <CartWidget />
                <form className="busqueda form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar...</button>
                </form>
            </div>
        </nav>
    )
}
