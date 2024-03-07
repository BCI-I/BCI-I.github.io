import React from 'react';
import { Helmet } from 'react-helmet';

const HeadTags = () => {
  return (
    <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" href="imgs/white_logo.svg" type="image/x-icon" />


          <script src="https://kit.fontawesome.com/a85270c6fc.js"
              crossorigin="anonymous"></script>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Nunito Sans"/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Orbitron"/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Teko"/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Cormorant Upright "/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Cormorant Infant"/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Space Mono"/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Kaushan Script "/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Alegreya "/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Poppins"/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Rosario"/>
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=DM Serif Display"/>
          <link rel="stylesheet"
              href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
          <link rel="stylesheet" type="text/css" href="style/style.css" />

          <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
          {/* <script defer src="js/landing.js"></script> */}


          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
              rel="stylesheet" type="text/css" />
          {/* <style type="text/css">
            #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
          </style> */}

          <link  type="text/css"  href="./prism.css" rel="stylesheet" />
      </Helmet>
  );
};

export default HeadTags;
