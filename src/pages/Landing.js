import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../imgs/abstract/brain_earth_nobg_compressed.png';
import scroll from '../imgs/useful/scroll_down.svg';

function fadeIn(element, delay) {
  setTimeout(function() {
    element.style.opacity = '1';
  }, delay);
}

document.addEventListener('DOMContentLoaded', function() {
  const sloganElement = document.querySelector('.BCII-slogan');
  const imgElement = document.querySelector('.landing-hero-img');

  const delaySlogan = 250;
  const delayImg = 1000;

  fadeIn(sloganElement, delaySlogan);
  fadeIn(imgElement, delayImg);
});

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>BCI Initiative</title>
      </Helmet>

      <section className="landing-hero .unselectable">
        <div className="landing-hero-content">
          <div className="landing-text">
            <a className="BCII-name clean-link" href="https://bci-i.github.io/">BCI
              initiative</a>
            <p className="BCII-slogan">

              <span className="slogan-second-line">Global
                <span> </span> <span className="textaccent">b</span>rain
                <span> </span> <span className="textaccent">c</span>omputer
                <span> </span> <span className="textaccent">i</span>nterfaces
                learning hub</span>
            </p>
          </div>

          
          <figure className="landing-hero-img">
            <img src={logo}
              alt="BCI I logo" />
          </figure>
          <div className="scroll-down">
            <img src={scroll} alt="scroll down" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
