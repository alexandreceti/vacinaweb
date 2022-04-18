import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavBar(props) {
  return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href={'/'}>
            <a className="navbar-item">
              <h1>💉 Dados de Distribuição</h1>
            </a>
          </Link>
          <Link href={'/sobre'}>
              <a className="navbar-item">
                Sobre
              </a>
          </Link>
        </div>
      </nav>
  );
}

export default NavBar;