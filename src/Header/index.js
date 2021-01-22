import React, { Component } from "react";
import './styles.scss';
import {
  NavLink,
  Link
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header bg-dark text-center">
        <h6 className="align-center">
          <Link to="/">SERGEI S. SERGIENKO</Link>
        </h6>

        <nav className="topmenu navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" activeClassName="active">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/education" activeClassName="active">Education</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/contacts" activeClassName="active">Contacts</NavLink>
            </li> */}
          </ul>
        </nav>

      </div>
    );
  }
}

export default Header;