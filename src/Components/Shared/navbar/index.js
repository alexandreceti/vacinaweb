import React from 'react';
import Image from 'next/image';

function NavBar(props) {
  return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <h2>Vanicas por Cidade</h2>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;