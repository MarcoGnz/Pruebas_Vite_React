import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Definición de PropTypes
Navegacion.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      nombre_page: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Navegacion(props) {
  const navigate = useNavigate(); // Hook para redirigir a otras rutas

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token de localStorage
    navigate("/login"); // Redirige a la página de inicio de sesión
  };

  // Verifica si el usuario está autenticado
  const isAuthenticated = !!localStorage.getItem("token");

  const navbarStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Negro con 70% de opacidad
  };

  return (
    <nav className="navbar navbar-dark fixed-top" style={navbarStyle}>
      <div className="container-fluid">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          to="/"
        >
          Home
        </NavLink>
        {/* Condicionalmente muestra el enlace de Login */}
        {!isAuthenticated && (
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/login"
          >
            Login
          </NavLink>
        )}
        {isAuthenticated && (
          <button
            className="btn btn-outline-light"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          style={navbarStyle}
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Dark offcanvas
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {props.pages.map((page, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to={page.link}
                  >
                    {page.nombre_page}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `dropdown-item ${isActive ? "active" : ""}`
                      }
                      to="/About"
                    >
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `dropdown-item ${isActive ? "active" : ""}`
                      }
                      to="/"
                    >
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `dropdown-item ${isActive ? "active" : ""}`
                      }
                      to="/About"
                    >
                      Something else here
                    </NavLink>
                  </li>
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
