"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var SignupForm = function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  function SignupForm() {
    _classCallCheck(this, SignupForm);

    return _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).apply(this, arguments));
  }

  _createClass(SignupForm, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          { className: "signup-text" },
          React.createElement(
            "b",
            null,
            "Sign up"
          ),
          " to our ",
          React.createElement(
            "b",
            {
              style: { fontFamily: 'Cormorant Infant' }
              // style={{marginRight: spacing + 'em'}}
            },
            "newsletter"
          ),
          "\xA0 to stay up to date"
        ),
        React.createElement(
          "div",
          { id: "mc_embed_shell" },
          React.createElement(
            "div",
            { className: "narrow-50", id: "mc_embed_signup" },
            React.createElement(
              "form",
              {
                action: "https://github.us21.list-manage.com/subscribe/post?u=41f96ef81a9e369790ea5f0bb&id=e4ef6dcf6e&f_id=0045efe6f0",
                method: "post", id: "mc-embedded-subscribe-form",
                name: "mc-embedded-subscribe-form", className: "validate",
                target: "_blank" },
              React.createElement(
                "div",
                { id: "mc_embed_signup_scroll" },
                React.createElement(
                  "div",
                  { className: "columns form-cols" },
                  React.createElement(
                    "div",
                    { className: "column" },
                    React.createElement(
                      "div",
                      { className: "mc-field-group" },
                      React.createElement(
                        "label",
                        {
                          htmlFor: "mce-FNAME" },
                        "First Name"
                      ),
                      React.createElement("input", { type: "text",
                        name: "FNAME", className: " text", id: "mce-FNAME", defaultValue: "" })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "column" },
                    React.createElement(
                      "div",
                      {
                        className: "mc-field-group" },
                      React.createElement(
                        "label",
                        { htmlFor: "mce-LNAME" },
                        "Last Name"
                      ),
                      React.createElement("input", { type: "text", name: "LNAME", className: " text",
                        id: "mce-LNAME", defaultValue: "" })
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "mc-field-group" },
                  React.createElement(
                    "label",
                    { htmlFor: "mce-EMAIL" },
                    "Email Address ",
                    React.createElement(
                      "span",
                      {
                        className: "required" },
                      "required"
                    )
                  ),
                  React.createElement("input", { type: "email",
                    name: "EMAIL", className: "required email", id: "mce-EMAIL", required: true,
                    defaultValue: "" })
                ),
                React.createElement(
                  "div",
                  { id: "mce-responses", className: "clear foot" },
                  React.createElement("div", { className: "response", id: "mce-error-response",
                    style: { display: 'none' }
                  }),
                  React.createElement("div", { className: "response", id: "mce-success-response",
                    style: { display: 'none' } })
                ),
                React.createElement(
                  "div",
                  {
                    style: { position: 'absolute', left: '-5000px' },
                    "aria-hidden": "true" },
                  "/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */",
                  React.createElement("input", { type: "text",
                    name: "b_41f96ef81a9e369790ea5f0bb_e4ef6dcf6e", tabIndex: "-1",
                    defaultValue: "" })
                ),
                React.createElement(
                  "div",
                  { className: "optionalParent" },
                  React.createElement(
                    "div",
                    { className: "clear foot buttons" },
                    React.createElement("input", { type: "submit", name: "subscribe",
                      id: "mc-embedded-subscribe", className: "button",
                      defaultValue: "Subscribe" })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SignupForm;
}(React.Component);

var domContainer = document.querySelector('#signup-container');
var root = ReactDOM.createRoot(domContainer);

root.render(e(SignupForm));