import React from "react";
import '../styles/component-styles/navbar.scss';

export default function NavBar() {
  return ( 
    <nav>
      <ul>
        <li>
          <a href={`dashboard`} className="nav-link">DASHBOARD</a>
        </li>
        <li>
          <a href={`projects`} className="nav-link">PROJECTS</a>
        </li>
      </ul>
    </nav>
  );
}