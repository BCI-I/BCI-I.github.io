"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "navbar is-transparent" },
        React.createElement(
          "div",
          { className: "navbar-brand" },
          React.createElement(
            "a",
            { className: "navbar-item", href: "https://bci-i.github.io/" },
            React.createElement("img", { src: "imgs/white_logo.svg",
              alt: "Brain Computer Initiative Logo" })
          )
        ),
        React.createElement(
          "div",
          { className: "navbar-menu" },
          React.createElement(
            "div",
            { className: "navbar-start" },
            React.createElement(
              "a",
              { className: "navbar-item BCII-name-navbar",
                href: "https://bci-i.github.io/" },
              "BCI initiative"
            )
          ),
          React.createElement(
            "div",
            { className: "navbar-end" },
            React.createElement(
              "a",
              { className: "navbar-item navbarpage",
                href: "https://bci-i.github.io/about" },
              "about"
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(React.Component);

var domContainer = document.querySelector('#navbar-container');
var root = ReactDOM.createRoot(domContainer);
root.render(e(Navbar));