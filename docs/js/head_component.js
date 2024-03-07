var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "columns footer" },
        React.createElement(
          "div",
          { className: "column has-text-centered" },
          React.createElement(
            "p",
            null,
            "BCI initiative is part of the Xheladin & Xhufe Morina Foundation."
          ),
          React.createElement(
            "a",
            { href: "https://www.xhmf.org/", target: "_blank" },
            React.createElement("img", { src: "imgs/xhmf_logo.svg",
              alt: "Xheladin & Xhufe Morina Fondation Logo" })
          )
        ),
        React.createElement(
          "div",
          { className: "column" },
          React.createElement(
            "p",
            { className: "footer-text" },
            React.createElement(
              "a",
              { href: "https://bci-i.github.io/about#contact-form" },
              "About."
            ),
            React.createElement("br", null),
            React.createElement(
              "a",
              {
                href: "https://us21.list-manage.com/contact-form?u=41f96ef81a9e369790ea5f0bb&form_id=a809be92be7821fe4014d6da5c26beb6",
                target: "_blank" },
              "Contact us"
            ),
            "\xA0or reach out at\xA0",
            React.createElement(
              "a",
              { href: "mailto:bciinit@proton.me" },
              "bciinit@proton.me"
            )
          ),
          React.createElement(
            "div",
            { className: "social-media" },
            React.createElement(
              "a",
              { href: "https://www.linkedin.com/company/bci-initiative", target: "_blank" },
              React.createElement("i", { className: "fab fa-linkedin social-media" })
            ),
            React.createElement(
              "a",
              { href: "https://twitter.com/BCI_init", target: "_blank" },
              React.createElement("i", { className: "fab fa-twitter-square social-media" })
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var domContainer = document.querySelector('#footer');
var root = ReactDOM.createRoot(domContainer);
root.render(e(Footer));