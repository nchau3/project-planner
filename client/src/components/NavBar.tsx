import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/component-styles/navbar.scss';

export default function NavBar() {
  const activeClassNames = "nav-link selected";

  return ( 
    <nav>
      <ul>
        <li>
          <NavLink
            to={`dashboard`}
            className={({ isActive }) =>
              isActive ? activeClassNames : "nav-link"
            }
          >
              DASHBOARD
            </ NavLink>
        </li>
        <li>
          <NavLink
            to={`projects`}
            className={({ isActive }) =>
              isActive ? activeClassNames : "nav-link"
            }
          >
              PROJECTS
            </ NavLink>
        </li>
      </ul>
    </nav>
  );
}