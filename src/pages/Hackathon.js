import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Nav';
import HackathonOverview from '../components/HackathonOverview';
import SepLine from '../components/SepLine';
import EventSummary from '../components/EventSummary';
import { Red, Blue, Green, Yellow, White } from '../components/Highlights';
import TitleLink from '../components/TitleLink';
import Note from '../components/Note';
import { ContentSection, ContentSubSection } from '../components/ContentSection';


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

    const event_summary = <p>
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

            {/* overivew */}
            <HackathonOverview
                what={what}
                why={why}
                when={when}
                where={where}
                how={how}
            />
            <SepLine />

            {/* summary */}
            <EventSummary
                description={event_summary}
                img_square={Square}
                img_4x5={Vert}
                img_4x3={Big}
                img_3x1={Banner}
            />
            <SepLine />


            {/* details */}
            <ContentSection title="Hackathon Details" title_id="h-info">
                <p>
                    We are happy to announce MIT's inaugural
                    <Yellow> Brain-Computer Interface (BCI)
                        Hackathon</Yellow>.
                    Participate in this <Green>48-hour</Green>
                    event, where teams of 3-5 MIT members will compete to
                    develop the most effective algorithm to <Red>control a robot using only their
                        brain</Red>.
                </p><br />

                <p>
                    BCI is inherently multidisciplinary,
                    requiring expertise in neuroscience, signal processing, machine
                    learning, and specialized hardware for measuring brain activity.
                    Our goal is to bring together students from diverse backgrounds,
                    providing
                    an opportunity to delve into the world of BCI and explore
                    potential collaborative research ventures.
                    Winning teams stand a chance to receive small seed funds to
                    kickstart their neurotechnology venture ideas.
                </p><br />

                <p>
                    What makes this hackathon distinctive is the hands-on challenge
                    where participants are tasked with controlling a physical robot
                    using only their brain. This physical device control introduces
                    an extra layer of complexity, setting it apart from traditional
                    software-only challenges. It not only tests participants'
                    technical skills but also showcases their ability to tackle
                    <Yellow> real-world problems</Yellow> through innovative
                    BCI applications.
                </p>

                <p>
                    Alongside the hackathon, we're hosting a networking event open to the
                    entire
                    neurotech community in Boston and featuring some of the most exciting
                    BCI
                    startups out there. This will be a great opportunity to meet and learn
                    from
                    professionals in the field. The networking event is also free!
                    Grab a ticket <a
                        href="https://www.meetup.com/neurotechbos/events/298910223"
                        target="_blank">here</a>!
                </p>

                <Note title="BCI Initiative" color="green">
                    <div>
                        This hackathon is organized by the <b>BCI initiative</b>, an
                        organization
                        dedicated to promoting education and research in BCI.
                        We're planning to <Green>create a Boston
                            Chapter</Green>
                        of the BCI initiative, and this hackathon is the first step towards
                        that goal.
                        If interested, please get in touch at <a
                            href="mailto:bciinit@proton.me">bciinit@proton.me </a>
                        or read more about us <a href="https://bci-i.github.io/">here</a>.
                    </div>
                </Note>
            </ContentSection>


            {/* How to participate */}
            <ContentSection title="How to Participate" title_id="h-participate">
                <ContentSubSection>
                    <p>
                        The hackathon will be held in <Green>late
                            February 2024</Green> at
                        <Red>the McGovern Institute </Red> at
                        MIT.
                        Participation will be open to all
                        MIT members and is free.
                        Signups are now open, <a
                            href="https://www.eventbrite.co.uk/e/mit-bci-hackathon-tickets-796876237277?aff=oddtdtcreator"
                            target="_blank">
                            secure your spot here!
                        </a>
                    </p>
                    <br />
                    <Note title="Teams" color="lightblue">
                        <div>
                            We strongly encourage participants to form
                            <Blue>teams of 3-5 individuals</Blue>,
                            ideally with
                            diverse expertise (robotics, neuroscience, machine learning, etc.).
                            <br /><br />
                            If you already have a team, you can let us know about it by filling
                            out
                            <a href="https://forms.gle/HBg5pvTfkRXiiy7h6" target="_blank"> this
                                form </a>.
                            Make sure that all team participants are MIT members and have 
                            <a
                                href="https://www.eventbrite.co.uk/e/mit-bci-hackathon-tickets-796876237277?aff=oddtdtcreator"
                                target="_blank">
                                 signed up
                            </a> for the hackathon!
                            <br /><br />
                            For those that do not have a team yet, we will assign you to one at
                            the beginning of the event,
                            so don't worry if you don't have a team yet!
                        </div>
                    </Note>

                    <br />
                    <p>
                        We endeavoured to make this event as accessible as possible, and we will
                        provide most of the
                        equipment necessary to participate in the hackathon. However, each team
                        will need at least
                        one laptop and potentially one Android phone device too.
                        If your team does not have access to these devices, please reach out to
                        us
                        and we will try to help you out.
                    </p>
                </ContentSubSection>

                <ContentSubSection title="Hardware" title_id="h-hardware">
                    <p>
                            This hackathon is unique in that it involves using brain activity to
                            control a physical robot.
                        </p><br/>
                        <p>
                            The hackathon is a competition, so to ensure a level playing field, we
                            will provide all teams with identical hardware.
                            You will use an <a href="https://xon-eeg.com/"
                            target="_blank">X.on EEG </a>
                            headset to record brain activity and a
                            <a
                            href="https://get.duckietown.com/products/duckiebot-db21?variant=41543707099311"
                            target="_blank"> Duckiebots </a>
                            for control.
                        </p><br/>

                </ContentSubSection>

            </ContentSection>
        </div>
    );
};

export default HackathonPage;
