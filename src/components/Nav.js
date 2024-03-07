import React from 'react';

import logo from '../imgs/white_logo.svg';

class Navbar extends React.Component {
    render() {
      return (
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bci-i.github.io/">
            <img src={logo}
              alt="Brain Computer Initiative Logo" />
          </a>
        </div>
  
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item BCII-name-navbar"
              href="https://bci-i.github.io/">
              BCI initiative
            </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item navbarpage"
              href="https://bci-i.github.io/about">
              about
            </a>
          </div>
        </div>
      </nav>
        );
      }
  }
    
  
export default Navbar;