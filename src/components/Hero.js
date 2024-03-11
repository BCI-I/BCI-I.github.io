import React from 'react';
import logo from '../imgs/abstract/brain_earth_nobg_compressed.png';
import scroll from '../imgs/useful/scroll_down.svg';


class Hero extends React.Component {
  render() {
    return (
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
      );
    }
}

export default Hero;