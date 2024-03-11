import React from 'react';
import xhm_logo from '../imgs/xhmf_logo.svg';


class Footer extends React.Component {
  render() {
    return (
    <div className="columns footer">
      <div className="column has-text-centered">
        <p>BCI initiative is part of the Xheladin & Xhufe Morina Foundation.
        </p>
        <a href="https://www.xhmf.org/" target="_blank">
          <img src={xhm_logo}
            alt="Xheladin & Xhufe Morina Fondation Logo" />
        </a>
      </div>

      <div className="column">
        <p className="footer-text">
          <a href="https://bci-i.github.io/about#contact-form">About.</a>
          <br />
          <a
            href="https://us21.list-manage.com/contact-form?u=41f96ef81a9e369790ea5f0bb&form_id=a809be92be7821fe4014d6da5c26beb6"
            target="_blank">
            Contact us
          </a>
          &nbsp;or reach out at&nbsp;
          <a href="mailto:bciinit@proton.me">bciinit@proton.me</a>
        </p>

        <div className="social-media">
          <a href="https://www.linkedin.com/company/bci-initiative" target="_blank">
            <i className="fab fa-linkedin social-media"></i>
          </a>
          <a href="https://twitter.com/BCI_init" target="_blank">
            <i className="fab fa-twitter-square social-media"></i>
          </a>
        </div>


      </div>
    </div>
      );
    }
}

export default Footer;