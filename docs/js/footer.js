'use strict';

const e = React.createElement;

class Footer extends React.Component {


  render() {
    <div class="columns">
      <div class="column has-text-centered">
        <p>BCI initiative is part of the Xheladin & Xhufe Morina Foundation.
        </p>
        <a href="https://www.xhmf.org/" target="_blank">
          {/* <img src="imgs/xhmf_logo.svg" */}
            {/* alt="Xheladin & Xhufe Morina Fondation Logo"> */}
        </a>
      </div>

      <div class="column">
        <p class="footer-text">
          <a href="https://bci-i.github.io/about#contact-form">About.</a>
          {/* <br> */}
          <a
            href="https://us21.list-manage.com/contact-form?u=41f96ef81a9e369790ea5f0bb&form_id=a809be92be7821fe4014d6da5c26beb6"
            target="_blank">
            Contact us
          </a>
          or reach out at
          <a href="mailto:bciinit@proton.me">bciinit@proton.me</a>
        </p>

        <div class="social-media">
          <a href="https://www.linkedin.com/company/bci-initiative" target="_blank">
            <i class="fab fa-linkedin social-media"></i>
          </a>
          <a href="https://twitter.com/BCI_init" target="_blank">
            <i class="fab fa-twitter-square social-media"></i>
          </a>
        </div>


      </div>
    </div>
  }
}

const domContainer = document.querySelector('#footer');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Footer));