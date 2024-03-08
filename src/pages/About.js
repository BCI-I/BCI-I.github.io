import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Nav';
import TeamMember from '../components/TeamMember';
import {TitleLink} from '../components/TitleLink';

import Federico from '../imgs/federico.png';
import Egzona from '../imgs/egzona.png';

/* -------------------------------------------------------------------------- */
/*                                LANDING PAGE                                */
/* -------------------------------------------------------------------------- */



const AboutPage = () => {

  return (
    <div>
      <Helmet>
        <title>BCI Initiative - About</title>
      </Helmet>

      <Navbar />

      <p class="narrow text-paragraph">
        The Brain Computer Interfaces Initiative (BCI-I) is dedicated to advancing global education and research in Brain-Computer Interfaces (BCIs). Our mission is twofold: to promote widespread understanding of BCI technology's possibilities and ethical considerations, and to actively recruit and support talented individuals, particularly from developing countries. Through strategically positioned local Chapters, collaborations with educational institutions, and BCI Challenges with the private sector, BCI-I aims to create a dynamic global hub fostering knowledge exchange, inclusivity, and innovation.
      </p>

      <section className="team">

      <TitleLink title="Our Team" id="team" />

      <div className="columns narrow">
        <div className="column">

          <TeamMember
            name="Dr. Federico Claudi"
            role="Co-Founder"
            img={Federico}
            blurb="Dr. Claudi completed his PhD in Neuroscience at the Sainsbury
            Wellcome Centre (University College London) before continuing
            his postdoctoral work at Massachussetts Institute of Technology
            (MIT) with Prof. Ila Fiete, in computational Neuroscience."
          />

        </div>

        <div className="column">
        <TeamMember
            name="Dr. Egzona Morina"
            role="Co-Founder"
            img={Egzona}
            blurb="Dr. Morina received her PhD in Neuroscience at the Sainsbury
            Wellcome Centre (University College London). Currently she is a
            postdoctoral associate in the Digital Learning Lab of the
            Biology Department at Massachusetts Institute of Technology
            (MIT)."
          />
        </div>
      </div>
    </section>

    </div>
  );
};

export default AboutPage;
