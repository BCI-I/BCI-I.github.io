"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LandingEvent = function (_React$Component) {
  _inherits(LandingEvent, _React$Component);

  function LandingEvent() {
    _classCallCheck(this, LandingEvent);

    return _possibleConstructorReturn(this, (LandingEvent.__proto__ || Object.getPrototypeOf(LandingEvent)).apply(this, arguments));
  }

  _createClass(LandingEvent, [{
    key: "render",
    value: function render() {
      // Check if data is loaded
      if (!this.props.title) {
        return React.createElement(
          "div",
          null,
          "Loading..."
        );
      }

      return React.createElement(
        "a",
        { href: this.props.url, className: "event-link", target: "_blank" },
        React.createElement(
          "div",
          { className: "event event-" + this.props.color },
          React.createElement(
            "div",
            { className: "event-content" },
            React.createElement(
              "p",
              { className: "event-title" },
              this.props.title
            ),
            React.createElement(
              "p",
              { className: "event-description " },
              this.props.description
            ),
            React.createElement(
              "div",
              { className: "event-info vert-on-mobile" },
              React.createElement(
                "div",
                { className: "columns" },
                React.createElement(
                  "div",
                  { className: "column is-4" },
                  this.props.date
                )
              )
            )
          ),
          this.props.img && React.createElement(
            "div",
            { className: "event-img" },
            React.createElement("img", { src: "imgs/hackathon/" + this.props.img,
              alt: this.props.img_alt })
          )
        )
      );
    }
  }]);

  return LandingEvent;
}(React.Component);

var domContainer = document.querySelector('#landing-events');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(
  "div",
  null,
  React.createElement(LandingEvent, {
    url: "https://bci-i.github.io/hackathon",
    color: "green",
    title: "MIT BCI Hackathon",
    description: "MIT's first BCI hackathon.",
    date: "Boston, February '24",
    img: "header_head_only_transp.png",
    img_alt: "MIT BCI Hackathon"
  }),
  React.createElement(LandingEvent, {
    url: "https://www.meetup.com/neurotechbos/events/298910223",
    color: "blue",
    title: "NTBOS & BCI-I Networking event",
    description: "An evening of networking with the Boston BCI community.",
    date: "Boston, February '24"
  })
));

// // Fetch YAML data
// fetch('data/events_previes.yaml')
//   .then(response => response.text())
//   .then(text => {
//     // Parse YAML data
//     const data = jsyaml.load(text);

//     // Iterate over each entry in the YAML data
//     for (const [key, value] of Object.entries(data)) {
//       console.log(key, value);
//       // create instance passing props
//       root.render(e(LandingEvent, {
//         url: value.url,
//         color: value.color,
//         title: value.title,
//         description: value.description,
//         date: value.date
//       }));
//     }
//   })
//   .catch(error => console.error('Error fetching YAML data:', error));