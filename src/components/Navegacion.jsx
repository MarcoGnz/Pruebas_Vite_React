import { NavLink } from 'react-router-dom';


function Navegacion() {

  const navbarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Negro con 70% de opacidad
  };

  return (
    <nav className="navbar navbar-dark fixed-top" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Offcanvas dark navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" style={navbarStyle} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/sobre"
                >
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><NavLink className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`} to="/sobre">Action</NavLink></li>
                  <li><NavLink className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`} to="/">Another action</NavLink></li>
                  <li><NavLink className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`} to="/sobre">Something else here</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navegacion;
