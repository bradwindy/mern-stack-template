import React from "react";

import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <a className="navbar-brand font-weight-bold" href="#">Example Nav Bar</a>
    <button className="navbar-toggler float-right ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/helloworld">Another Tab</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Empty</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Empty</Link>
        </li>
      </ul>
    </div>
    <header>

      <nav>

      </nav>
    </header>
  </nav>

);

export default Header;
