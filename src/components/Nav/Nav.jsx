import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            exact
            to="/"
            className="nav-list__link"
            activeClassName="nav-list__link_active"
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new"
            className="nav-list__link"
            activeClassName="nav-list__link_active"
          >
            New
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/completed"
            className="nav-list__link"
            activeClassName="nav-list__link_active"
          >
            Completed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
