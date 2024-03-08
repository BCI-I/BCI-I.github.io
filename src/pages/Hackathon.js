import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Nav';
import HackathonOverview from '../components/HackathonOverview';
import SepLine from '../components/SepLine';
import EventSummary from '../components/EventSummary';
import {Red, Blue, Green, Yellow, White} from '../components/Highlights';

import Square from '../imgs/hackathon/square_one.jpg';
import Vert from '../imgs/hackathon/vert.jpg';
import Big from '../imgs/hackathon/big.jpg';
import Banner from '../imgs/hackathon/banner.jpg';

const HackathonPage = () => {

    const what = <span>
        <White>
            MIT's first <u>B</u>rain <u>C</u>omputer <u>I</u>nterfaces
            (BCI) hackathon.
        </White>
        <br /><br />
        Up to 100 MIT members will compete to control a robot using
        only their brain.
        <br /><br />
        Winning teams will receive prizes and recognition.
    </span>

    const why = <span>
        BCIs are an incredibly powerful technology, but more
        research
        is necessary
        to realize its promise.
        <br /><br />
        <Yellow>
            We want you to be part of this journey.
        </Yellow>
    </span>

    const when = <Green>February 24<sup>th</sup> -
        25<sup>th</sup>
        2024</Green>

    const where = <span>
        In person. <br />
        <Red>McGovern Institute</Red> @
        MIT
    </span>

    const how = <span>
        The hackathon is open to all MIT members and is free to
        attend.
        <br /><br />
        Signups are now open, <Blue>secure your spot!</Blue>
        <br />

    </span>

    const event_summary =             <p>
        <Green>60</Green> participants, from 7 MIT departments. 
        <br /><br />
        <Yellow>48</Yellow> hours of hacking.
        <br /><br />
        <Red>14</Red> X.on EEG headsets
        <br /><br />
        <Blue>12</Blue> teams, each with a unique approach to the challenge.
        <br /><br />
        <Green>3</Green> Duckiebots.              
        <br /><br />
        <Blue>3</Blue> winning teams. 
    </p>


    return (
        <div>
            <Helmet>
                <title>BCI Initiative - MIT Hackathon</title>
            </Helmet>

            <Navbar />

            <HackathonOverview
                what={what}
                why={why}
                when={when}
                where={where}
                how={how}
            />
            <SepLine />

            <EventSummary 
                description={event_summary}
                img_square={Square}
                img_4x5={Vert}
                img_4x3={Big}
                img_3x1={Banner}
            />
            <SepLine />
        </div>
    );
};

export default HackathonPage;
