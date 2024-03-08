import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Nav';
import HackathonOverview from '../components/HackathonOverview';
import SepLine from '../components/SepLine';
import EventSummary from '../components/EventSummary';
import { Red, Blue, Green, Yellow, White } from '../components/Highlights';
import Note from '../components/Note';
import { ContentSection, ContentSubSection } from '../components/ContentSection';
import { CardImage, CardVideo } from '../components/Card';
import { ScheduleDay, ScheduleEntry } from '../components/Schedule';
import {Sponsor, Partner} from '../components/Sponsor';
import { SubTitleLink } from '../components/TitleLink';

import Square from '../imgs/hackathon/square_one.jpg';
import Vert from '../imgs/hackathon/vert.jpg';
import Big from '../imgs/hackathon/big.jpg';
import Banner from '../imgs/hackathon/banner.jpg';
import XonVideo from '../imgs/hackathon/x.on-hero-video.mp4'
import XonImg from '../imgs/hackathon/xon_nobg.png'
import Duckiebot from '../imgs/hackathon/duckiebot_nobg.png'
import BrainProducts from '../imgs/hackathon/BrainProductsLogo.svg'
import Duckitown from '../imgs/hackathon/Duckietown-logo-2020.png'
import Precision from '../imgs/hackathon/precision_logo.svg'
import McGovern from '../imgs/hackathon/mcgovern_logo.svg'
import Sandbox from '../imgs/hackathon/sandbox.png'
import BCS from '../imgs/hackathon/bcs_logo.png'
import YangTan from '../imgs/hackathon/Yang-Tan-Collective-Logo_Color.jpg'


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
                    </p><br />
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
                    </p><br />

                    <div className="columns narrow">
                        <div className="column">
                            <CardVideo title="X.on EEG headset" video={XonVideo} img={XonImg} img_alt="X.on headset">
                                The
                                <a href="https://xon-eeg.com/"
                                    style={{ 'textDecoration': "underline" }}
                                    target="_blank"> X.on </a>
                                <Blue>wireless EEG</Blue>
                                headset by Brain Products has
                                <Red>7 EEG channels</Red>
                                for high-quality EEG recordings.
                                <br />
                            </CardVideo>
                        </div>
                        <div className="column">
                            <CardImage title="Duckiebot" img={Duckiebot} img_alt="Duckiebot robot">
                                <a
                                    href="https://get.duckietown.com/products/duckiebot-db21?variant=41543707099311"
                                    style={{ 'textDecoration': "underline" }}
                                    target="_blank">Duckiebots </a>
                                are
                                <Yellow> affordable self-driving cars </Yellow>
                                designed by
                                <a href="https://duckietown.com/" target="_blank"> Duckietown </a>
                                to promote education on self-driving vehicles.
                            </CardImage>
                        </div>
                    </div>

                    <Note title="Additional Information" color="green">
                        Closer to the competition date, we will add additional information
                        about the hardware used during the competition
                        as well as instructions on how to use it
                        <a href="https://bci-i.github.io/hackathon-materials"
                            target="_blank"> here</a>.
                    </Note>
                </ContentSubSection>


                <ContentSubSection title="Competition" title_id="h-comp">
                    <p>
                        The hackathon adopts a competitive structure.
                        Team's performance will be scored based on how accurately and
                        effectively they can control the robots.
                    </p><br />
                    <p>
                        At the end of the competition, teams will
                        participate in a <Red>live
                            demonstration</Red> of their algorithm to
                        determine the winners.
                    </p>
                </ContentSubSection>

                <ContentSubSection title="Prizes" title_id="h-prizes">
                    <p>
                        Winning teams will be provided with the opportunity to participate in
                        the MIT Sandbox Innovation Fund Program.
                        MIT Sandbox plays a pivotal role in entrepreneurship education,
                        extending essential funding and mentorship to empower MIT student
                        innovators.
                        Selected teams will gain access to the program, receiving mentorship
                        along with a small budget to prototype their venture ideas.
                    </p><br />

                    <p>
                        Sandbox generously offers three prizes:

                        <br />
                        &emsp;<Green>First place</Green>
                        &ensp;&ensp;&ensp;- $1,500
                        <br />
                        &emsp;<Blue>Second place</Blue> - $1,000
                        <br />
                        &emsp;<Red>Third place</Red> &ensp;&ensp;-
                        $500
                    </p>


                    <Note title="Participating in Sandbox" color="salmon">
                        Participation in MIT Sandbox's program involves specific
                        requirements:
                        each team must have at least one MIT student in a leadership role
                        and
                        participation is conditional on proposing a venture project.
                        Furthermore, the proposed venture project must align with Sandbox's
                        mission and guidelines,
                        reflecting a commitment to the values and goals of MIT Sandbox,
                        emphasizing innovation and entrepreneurship.
                        Teams seeking sponsorship approval <b>must submit a venture project
                            application</b>, subject to a final review by MIT Sandbox.
                    </Note>

                    <Note title="Cash prizes" color="green">
                        For those teams that do not meet the criteria or choose not to
                        enroll in the Sandbox program, we're considering providing an
                        alternative option —
                        a cash prize of $500 (max 2 teams).
                    </Note>
                </ContentSubSection>

                <ContentSubSection title="Schedule" title_id="h-schedule">
                    <p>
                        <ScheduleDay day="1" date="February 24th" />
                        <ScheduleEntry time="10:00 - 10:30" description="Registration" />
                        <ScheduleEntry time="10:30 - 12:00" description="Opening remarks and invited talks" />
                        <ScheduleEntry time="12:00 - 20:00" description="Hacking" />
                    </p>
                    <br />
                    <p>
                        <ScheduleDay day="2" date="February 25th" />
                        <ScheduleEntry time="09:00 - 09:30" description="Registration" />
                        <ScheduleEntry time="09:30 - 16:30" description="Hacking" />
                        <ScheduleEntry time="16:30 - 19:00" description="Competition" />
                        <ScheduleEntry time="19:00 - 20:00" description="Awards and closing remarks" />
                    </p>
                    <br /><br />
                    <p>
                        The schedule is subject to change.
                        We will provide snacks, hot drinks and lunch on both days.
                    </p>
                </ContentSubSection>

                <ContentSubSection title="Preparing for the hackathon" title_id="h-prep">

                    <p>
                        Unlike traditional hackathons, in this hackathon you will need to use
                        different bits
                        of hardware that you might not be familiar with.
                        To help you hit the ground running and start hacking right away, we're
                        collecting useful resources.
                        Check out the material we are preparing <a
                            href="https://bci-i.github.io/hackathon-materials"
                            target="_blank"> here</a>.
                    </p>


                    <Note title="Hardware requirements" color="salmon">
                        To participate in the hackathon, each team will need at least one
                        laptop running either Ubuntu or MacOS (Intel, not
                        the new M chips) and an Android phone or tablet (ideally with
                        Bluetooth 5.0 or newer). If your team does not have access to these devices,
                        please let us know when you're
                        <a href="https://forms.gle/HBg5pvTfkRXiiy7h6" target="_blank"> registering your team  </a>
                        and we will try to help you out.
                        More details about the requirements can be found <a
                            href="https://bci-i.github.io/hackathon-materials"
                            target="_blank"> on this page.</a>
                    </Note>
                </ContentSubSection>
            </ContentSection>

            <ContentSection title="Our Sponsors" title_id="sponsors">
                <p>
                    This event would not be possible without the generous
                    support of our sponsors.
                    <br /><br />
                    <Blue>Platinum</Blue> level sponsor made
                    this event possible by
                    lending the hardware used during the competition.
                    The EEG headsets and robots were generously provided by
                    the following companies.
                    These companies are passionate about BCI and robotics
                    and are excited
                    to promote education and research in this field.
                    <br /><br />
                    <Yellow>Gold</Yellow> level sponsors financially
                    supported the hackathon.
                </p>


                <div class="columns">
                    <div class="column">
                        <Sponsor tier="platinum"
                            url="https://www.brainproducts.com/"
                            logo={BrainProducts} name="Brain Products"
                            quote="Advancing human knowledge in the field of neuroscience research."
                        >
                            Brain Products is a leading
                            manufacturer of
                            hardware and software solutions for
                            neurophysiological research.
                            They supported the hackathon by lending their
                            new
                            <a href="https://xon-eeg.com/" target="_blank"> X.on </a>
                            wireless EEG headset.
                        </Sponsor>
                    </div>
                    <div class="column">
                        <Sponsor tier="platinum"
                            url="https://duckietown.com/"
                            logo={Duckitown}
                            name="Ducketown"
                            quote="Making the world excited about the beauty,
                            the fun,
                            the importance, and the challenges of
                            robotics and AI, through learning
                            experiences that are tangible, accessible,
                            and inclusive."
                        >

                            Duckietown develops affordable hardware,
                            software and educational content to promote
                            education on robotics and self driving vehicles
                            across the globe.
                        </Sponsor>
                    </div>
                    <div class="column">
                        <Sponsor 
                            tier="gold" 
                            url="https://precisionneuro.io/" 
                            logo={Precision} 
                            name="Precision"
                            quote="Restoring freedom through brain–computer interfaces."
                        >
                                Precision Neuroscience is building a direct connection between
                                the
                                human brain and computers, to benefit the hundreds of millions
                                of
                                people worldwide suffering from neurological conditions.
                                Established in 2021, we are a leader in the development and
                                commercialization of brain–computer interfaces (BCI).      
                        </Sponsor>
                    </div>
                </div>


                <SubTitleLink title="Partners" id="h-partners" />
                <p>The hackathon was supported by the following MIT Centers.</p><br/>
                <div class="columns narrow">
                    <Partner url="https://mcgovern.mit.edu/" img={McGovern} alt="McGovern Institute Logo" transparent="true" />
                    <Partner url="https://sandbox.mit.edu/" img={Sandbox} alt="Sandbox Logo" />
                </div>
                    
                <div class="columns narrow">
                    <Partner url="https://bcs.mit.edu/" img={BCS} alt="Brain and Cognitive Sciences Logo" />
                    <Partner url="https://yangtan.mit.edu/k-lisa-yang-center-for-bionics/" img={YangTan} alt="K. Lisa Yang Logo" />
                </div>
            </ContentSection>
            <br /><br />
        </div>
    );
};

export default HackathonPage;
