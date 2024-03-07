import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../components/Hero';
import SepLine from '../components/SepLine';
import ImgTextSurround from '../components/ImgTextSurround';
import TitleLink from '../components/TitleLink';
import LandingEvent from '../components/LandingEvent';
import SignupForm from '../components/SignupForm';

import globe_network from '../imgs/abstract/earth_network_2.png';
import banner from '../imgs/hackathon/header_head_only_transp.png';


function fadeIn(element, delay) {
  setTimeout(function() {
    if (!element) {
      return;
    }
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


/* -------------------------------------------------------------------------- */
/*                                LANDING PAGE                                */
/* -------------------------------------------------------------------------- */



const LandingPage = () => {

  const top_left = <span>
                Strive to support <span className="highlight"> global education</span>
            and research in Brain-Computer Interfaces
  </span>

  const top_right = <span>
            Ensure an inclusive and <span className="highlight-salmon">equitable
              future</span> for BCIs.
  </span>

  const bottom_right = <span>
            Make BCI
            <span className="highlight-lightblue">knowledge accessible to
              everyone</span>,
            everywhere.
    </span>

  const bottom_left = <span>
            Identify and <span className="highlight-green">support talented
              individuals</span> pursuing careers in BCIs.
  </span>



  return (
    <div>
      <Helmet>
        <title>BCI Initiative</title>
      </Helmet>

      <Hero />
      <SepLine />

      <section className="landing-content">
      
      {/* --------------------------------- mission -------------------------------- */}
      <TitleLink title="Mission" id="mission" />
      <ImgTextSurround
        top_left={top_left}
        top_right={top_right}
        bottom_left={bottom_left}
        bottom_right={bottom_right}
        img_url={globe_network}
        img_alt="BCI I logo"
      />

      <p className="narrow text-paragraph">
          The Brain Computer Interfaces Initiative (BCI-I) is dedicated to
          advancing global education and research in Brain-Computer Interfaces
          (BCIs). Our mission is twofold: to promote widespread understanding of
          BCI technology's possibilities and ethical considerations, and to
          actively recruit and support talented individuals, particularly from
          developing countries. Through strategically positioned local Chapters,
          collaborations with educational institutions, and BCI Challenges with
          the private sector, BCI-I aims to create a dynamic global hub
          fostering knowledge exchange, inclusivity, and innovation.
      </p>


      {/*--------------------------------- events --------------------------------- */}
      <TitleLink title="Our Events" id="events" />
      <div id="landing-events">
        <LandingEvent
          url="https://bci-i.github.io/hackathon"
          color="green"
          title="MIT BCI Hackathon"
          description="MIT's first BCI hackathon."
          date="Boston, February '24"
          img={banner}
          img_alt="background img"
        />
        <LandingEvent
          url="https://www.meetup.com/neurotechbos/events/298910223"
          color="blue"
          title="NTBOS & BCI-I Networking event"
          description="An evening of networking with the
          Boston BCI community."
          date="Boston, February '24"
        />
          <div className="event event-placeholder">
          <p className="event-title">More to come...</p>
        </div>
      </div>
      </section>
      
      <section className="landing-signup" id="signup">
        <SignupForm />
      </section>


    </div>
  );
};

export default LandingPage;
