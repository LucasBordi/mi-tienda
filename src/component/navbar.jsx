export const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <a className="navbar-brand" href="#">Tienda de Cosmeticos</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item dropdown show">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Productos
                        </a>
                        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li className="dropdown-item" href="#">Cremas</li>
                            <li className="dropdown-item" href="#">Perfumes</li>
                            <li className="dropdown-item" href="#">Todos</li>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Consultas</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar...</button>
                </form>
            </div>
        </nav>
    )
}