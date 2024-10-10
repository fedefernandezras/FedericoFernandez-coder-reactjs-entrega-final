import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img
          className="logoMascota"
          src="/img/mascotaplogo.png"
          alt="Logo"
        />
      </Link>

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/"> Inicio </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/perros"> Perros </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/gatos"> Gatos </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/accesorios"> Accesorios </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
