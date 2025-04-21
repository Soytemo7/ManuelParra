import React from "react";

export const Navbar = () => {
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dr. Manuel Parra.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={closeNavbar}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={closeNavbar}>
                  Acerca
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#" onClick={closeNavbar}>
                      Contabilidad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={closeNavbar}>
                      Derecho
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={closeNavbar}>
                      Programación y Diseño WEB
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto" onClick={closeNavbar}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
