"use strict";

const e = React.createElement;

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bci-i.github.io/">
          <img src="imgs/white_logo.svg"
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
    

const domContainer = document.querySelector('#navbar-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Navbar));
