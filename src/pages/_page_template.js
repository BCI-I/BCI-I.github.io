import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Nav';




const AboutPage = () => {

  return (
    <div>
      <Helmet>
        <title>BCI Initiative - About</title>
      </Helmet>

      <Navbar />

    </div>
  );
};

export default AboutPage;
