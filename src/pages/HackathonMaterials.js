import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Nav';
import { Red, Blue, Green, Yellow, White } from '../components/Highlights';
import Note from '../components/Note';
import { ContentSection, ContentSubSection } from '../components/ContentSection';
import CodeBlock from '../components/Code';


import CodeImg from '../imgs/carbon(19).png'
import { Code } from 'react-code-blocks';


// import { CodeBlock, dracula } from "react-code-blocks";

const HackathonMaterialsPage = () => {


    return (
        <div>
            <Helmet>
                <title>BCI Initiative - MIT Hackathon</title>

            </Helmet>

            <Navbar />

            <ContentSection title="Preparing for the Hackahton" title_id="#before">
                <p>
                    In order to access some of the software needed you will need:
                </p>

                <ul>
                    <li>a <a href="https://github.com/join" target="_blank">GitHub </a>
                        account</li>
                    <li>a <a href="https://hub.docker.com/signup" target="_blank">Docker
                        Hub</a> acount</li>
                    <li>a <a href="https://hub.duckietown.com/" target="_blank">Duckietown
                        Hub</a> account</li>
                </ul>

                <p>
                    Making sure that you have all accounts ready ahead of the competition will
                    help you save time that
                    you can spend hacking instead.
                </p>

                <Note title="Hardware requirements" color="salmon">
                    To participate in the hackathon, each team needs to be able to stream
                    data from the EEG headset and to
                    send and receive data to and from the Duckiebot. You will need to rely
                    on the manufacturer's software to do so,
                    and this means that you will need devices that can run the
                    software.<br /><br />

                    For the Duckiebot you will need either Linux or MacOS laptops (ideally
                    with Intel silicon).
                    For the EEG headset you will need an Android device with Bluetooth
                    connectivity.
                    We strongly encourage all teams to ensure that they have access to such
                    devices.
                    <br /><br />
                    <b>
                        We will have a very limited number of Android devices available
                    </b>for teams that do not have access to one, but we cannot guarantee
                    that we will have enough for everyone.
                    Please fill in <a href="https://forms.gle/FQkiAFPthqyqAbGh6" target="_blank"> this form </a>
                    let us know ahead of time what hardware you or your team have available
                    to help us plan accordingly.
                </Note>
            </ContentSection>


            <ContentSection title="X.on EEG headset" title_id="#eeg">
                <p>
                    The <a href="https://xon-eeg.com/" target="_blank">X.on EEG headset</a> is
                    an affordable and easy
                    to use EEG headset. It's light and wireless, making it very portable yet
                    it's capable of
                    recording high quality EEG data from its 8 channels (+ reference) and
                    3-axis accelerometer.
                </p>
                <br />
                <p>
                    To learn more about the X.on design and specifications, you can check the
                    website for the <a href="https://xon-eeg.com/" target="_blank">X.on EEG headset</a>.
                    On the day of the hackahton, we will provide the <Yellow>X.on user manual</Yellow>
                    describing how to setup and use the headset (also
                    seet this <a href="https://www.youtube.com/watch?v=2HwxGtheWJ8" target="_blank"> video</a>.
                    )
                </p>

                <ContentSubSection title="X.on software" title_id="xsoftware">
                    <p>
                        <Green>Streaming data from the X.on</Green>. To
                        stream EEG data from the headset,
                        you will need to connect it to to an Android device with a Bluetooth
                        connection. The X.on user manual
                        will describe how to do this.
                        Once connected, go to "monitor" and the X.on app will stream the data over
                        WiFi using the <a href="https://labstreaminglayer.org/#/"
                            target="_blank">Lab Streaming Layer (LSL)</a>.
                        <br /><br />
                        To <Blue>read the data on your laptop</Blue>,
                        you can use the <a href="https://github.com/labstreaminglayer/pylsl"
                            target="_blank">pylsl</a> Python library.
                        We recomend familiarizing yourself with
                        both LSL and pylsl before the hackathon.
                        <br /><br />
                        This <b>code</b> shows how to stream eeg data in Python using pylsl:
                    </p>

                    <CodeBlock
                        text={`
                    """
                    Example program to show how to read a 
                    multi-channel time series from LSL.
                    """
        
                    from pylsl import StreamInlet, resolve_stream
                    
                    
                    def main():
                        # first resolve an EEG stream on the lab network
                        print("looking for an EEG stream...")
                        streams = resolve_stream('type', 'EEG')
                    
                        # create a new inlet to read from the stream
                        # you'll need to make sure that you're accessing YOUR headset
                        inlet = StreamInlet(streams[0])
                    
                        while True:
                            # get a new sample
                            sample, timestamp = inlet.pull_sample()
                            console.log(timestamp, sample)
                    
                    
                    if __name__ == '__main__':
                        main()
                    `}
                        language="phython"
                    />

                    <Note title="Ensuring correct streaming" color="lightblue">
                        To make sure that your computer can see the LSL stream, you need to have
                        both your
                        laptop and Android device connected to the same Wi-Fi network. If you're
                        still unable
                        to see the stream, enable Bluetooth thetering and WiFi hotspot on your
                        phone.
                    </Note>

                    <br />
                    <p>
                        During the hackathon, there will be a lot of devices on at the same time,
                        each streaming data.
                        To make sure that you can see the stream from your headset, first take
                        note of the SN (Serial Number)
                        indicated near the carging port of your headset. Next, in the X.on App
                        make sure you're connected to
                        the device with the same SN. <br />
                        In pylsl, you can get a list of all the LSL streams and check for the one
                        with the same SN:
                    </p>

                    <CodeBlock
                        text={`
        import pylsl

        # Resolve EEG streams
        streams = pylsl.resolve_streams()
        
        # Iterate through streams
        print(f"Found {len(streams)} streams")
        print("---------------")
        
        for stream in streams:
            print("Stream Name:", stream.name())
            print("Stream Type:", stream.type())
            print("Stream ID:", stream.source_id())   # this should match your X.on Serial Number
            print("Stream Unique Identifier:", stream.uid())
            print("---------------")
        `}
                        language="python"
                    ></CodeBlock>

                </ContentSubSection>

            </ContentSection>

            <ContentSection title="Duckietown" title_id="#db">
                <p>
                    The Duckiebots are affordable self-driving cars with several sensors and
                    enough
                    computational power to run complex algorithms. They are designed to be
                    used in
                    educational environments and are a great platform to learn about
                    robotics and
                    autonomous vehicles. We will use them as a platform to test the BCI
                    hackathon
                    participants' ability to control a robot using their brain activity.
                </p>
                <br />
                <p>
                    Alongside the physical robots, Duckietown has developed the
                    <Red>Duckiematrix </Red> a
                    physically-realistic digital twin of the Duckiebot.
                    We will use the Duckiematrix to simulated the Duckiebots during
                    development of
                    the BCI algorithms. For the final competition, we will switch to using
                    the physical Duckiebots.
                    These instructions will help you set up you computer to run the
                    Duckiematrix
                    and provide some example for controlling your robots.
                </p>


                <ContentSubSection title="Duckiebot software" title_id="dbsoftware">
                    <p>
                        To get ready to use the Duckietown software, start by reading both the
                        <a
                            href="https://docs.duckietown.com/ente/devmanual-Duckiematrix/intro.html"
                            target="_blank"> Duckiematrix</a> and <a
                                href="https://docs.duckietown.com/ente/opmanual-duckiebot/intro.html"
                                target="_blank"> Duckiebot</a> user manuals.
                    </p>
                    <br />
                    <p>
                        To beging setting up your computer to run the Duckiematrix, you will
                        need to install
                        Python as a <b>system installation</b> (i.e. not in a virtual
                        environment with pip or conda).
                        To do that, follow the instructions
                        <a href="https://www.python.org/downloads/release/python-3100/"
                            target="_blank"> here</a>.
                        Next, make sure you'll be using the system python version:
                    </p>
                    <br />

                    <div className="imgcontainer">
                        <img src={CodeImg} alt="Duckiebot" />
                    </div>

                    <br />
                    <p>
                        Next, you will install the <Blue>Duckietown Shell</Blue>:
                    </p>

                    <CodeBlock
                        text={`
                        python3 -m pip  install git+https://github.com/duckietown/duckietown-shell@v6
                        which dts
                        `}
                        language="bash"
                    />
                    <br />


                    <p>
                        If everything went correct,
                        you can connect your duckietown account. Enter
                        <code>dts</code>
                        in the terminal,
                        select the account type <b>ente</b> and generate a token
                        by going to <a
                            href="https://hub.duckietown.com/signin/?next=/profile/token/generator/"
                            target="_blank">this link</a>.


                        <br />

                        Once you have connected the account, enter:
                        <code>dts commands</code> in your terminal to finish installing the
                        Duckietown
                        CLI.
                        You will also connect your Docker account to the Duckietown account by
                        running:
                    </p>

                    <CodeBlock
                        text={`
                        dts config docker credentials set 
                        --username DOCKERHUB_USERNAME 
                        --password DOCKERHUB_ACCESS_TOKEN
                        `}
                        language="bash" />


                    <br />
                    <p>             If everything went well, you should be able to run commands like
                        <code>dts fleet discover</code> without errors.</p>

                    <Note title="Docker" color="salmon">
                        To run Duckietown code, you need to have <a
                            href="https://www.docker.com/" target="_blank">Docker</a> installed and running!
                    </Note>

                    <p>
                        To install the <Blue>Duckietown Matrix</Blue>
                        run: <code>dts matrix install</code>.
                        Among other things, this will install an <code>.app</code> file
                        running
                        the matrix's renderer.
                        You'll need to know its location in your computer, to find it, run:
                        <code>dts matrix run -s -S</code>. <br />
                        Once we're ready to launch the matrix's renderer, you will need to
                        double click the .app file.
                        The first time you run the matrix's .app file, you might get a
                        message
                        saying that
                        the file couldn't be opened because it was downloaded from the
                        internet.
                        To enable it, go to <code>System Preferences Security & Privacy
                        </code> and you should
                        see a message asking if you want to open it anyways - say yes.
                    </p>
                    <br />
                    <p>
                        Before launching the matrix's renderer, you will need to launch the
                        simulation engine.
                        To do so, you need to specify a <i>map</i> to use.
                        One of the great featues of the Duckiematrix is that you can create
                        realistic looking maps.
                        You will use a replica of the competition maps - download it <a href="https://github.com/BCI-I/MIT-BCI-Hackathon"
                            target="_blank">here</a>.
                        Download the folder and move <code>BCI-I</code> to the
                        <code>.app</code>
                        file's folder.
                    </p>
                    <br /><br />
                    <p>
                        To <Red>run the matix</Red>, engine -
                        <code>cd</code> to the app folder and run: <code>dts matrix run -S
                            -m
                            ./bci-i/</code>.
                        Now, open the .app: you should see a window with a rendering of the
                        map
                        and a Duckiebot in it. You have different views at your disposal,
                        and
                        you can use the WASD keys to move the camera around and even control
                        the
                        duckiebot!
                        <br />
                        Below, we will show how to use the Duckietown SDK to control the
                        robot:
                        when you do so, you should see the robot in the
                        matrix move accordingly!
                    </p>

                    <br />
                    <p>
                        To control
                        your robots (both virtual and real) you'll need to install the
                        Duckietown SDK:
                        <code>python3 -m pip install "duckietown-sdk"</code>.
                    </p>

                    <br /><br />
                    <p>
                        If everything went correctly, you should have the Duckiematrix open,
                        and you should be able to see a map and a Duckiebot in it.
                        Next, we will share some code for moving the robot and to read data
                        from it. Note that the same code will work for both the simulated
                        and real robots, you will just need to change the robot name
                        accordingly.
                        <br />Start by creating a reference to your robot:
                    </p>

                    <CodeBlock
                        text={`
                    import time
                    from typing import Tuple, List
                    from duckietown.sdk.robots.duckiebot import DB21J
                    from duckietown.sdk.types import LEDsPattern, RGBAColor
            
                    SIMULATED_ROBOT_NAME: str = "map_0/vehicle_0"
                    REAL_ROBOT_NAME: str = "rover"
            
                    robot: DB21J = DB21J(SIMULATED_ROBOT_NAME, simulated=True)  # change accordingly
                    `}
                        language="python"
                    />
                    <p>Next, you can use this code to send commands to the wheels
                        and LEDs:
                    </p>

                    <CodeBlock
                        text={`
                    # move wheels
                    speeds = (0.5, 0.5)
                    robot.motors.start()
                    stime: float = time.time()
                    while time.time() - stime < 4:
                      robot.motors.publish(speeds)
                      time.sleep(0.25)
                      print("speedy")
                    robot.motors.stop()
                    print("Stopped.")
                    `}
                        language="python"
                    />

                    <CodeBlock
                        text={`
                    # LED lights show
                    frequency: float = 1.4
                    off: RGBAColor = (0, 0, 0, 0.0)
                    amber: RGBAColor = (1, 0.7, 0, 1.0)
                    lights_on: LEDsPattern = LEDsPattern(front_left=amber, front_right=amber, rear_right=amber, rear_left=amber)
                    lights_off: LEDsPattern = LEDsPattern(front_left=off, front_right=off, rear_right=off, rear_left=off)
                    pattern: List[LEDsPattern] = [lights_on, lights_off]
                    robot.lights.start()
                    stime: float = time.time()
                    i: int = 0
                    while time.time() - stime < 8:
                      lights: LEDsPattern = pattern[i % 2]
                      robot.lights.publish(lights)
                      time.sleep(1. / frequency)
                      i += 1
                    robot.lights.stop()
                    print("Stopped.")
                    `}
                        language="python"
                    />

                    <Note title="Careful" color="salmon">
                        When using a real Duckiebot, make sure that the bot is on the
                        ground
                        and that there's no obstacle in front of it. When you send a
                        command
                        to it, it <b>will move</b> - avoid damaging it by checking
                        the environment first.
                    </Note>

                    <p>
                        To stream data from the ToF (Time of Flight; distance) sensor and
                        camera, you can use this code:
                    </p>


                    <CodeBlock
                        text={`
                    # ToF
                    def _range_finder_cb(data: Optional[float]):
                      if data is None:
                        print("Out of range.")
                        return
                      print(f"Range: {data} meters.")
            
                    robot.range_finder.start()
                    stime: float = time.time()
                    while time.time() - stime < 2:
                        data = robot.range_finder.capture(block=True)
                        _range_finder_cb(data)
                    print("Stopped.")
                    robot.range_finder.stop()
                    `}
                        language="python"
                    />

                    <CodeBlock
                        text={`
                    # Camera
                    def _camera_cb(data: BGRImage):
                      print(f"Received image of shape: {data.shape}")
            
            
                    robot.camera.start()
                    stime: float = time.time()
                    while time.time() - stime < 2:
                      data = robot.camera.capture(block=True)
                      _camera_cb(data)
                    print("Stopped.")
                    robot.camera.stop()
                    `}
                        language="python"
                    />


                    <Note title="Is it working?" color="green">
                        If everything is working correctly, you should see the robot move
                        in
                        the Duckiematrix!
                        Keep an eye out for the terminal where you're running the matrix's
                        engine, you should see
                        messages letting you know when you hit obstacles with the robot.
                    </Note>
                </ContentSubSection>

                <br /><br />
                <p>
                    The last thing you need to know, is how to use the real Duckiebots.
                    Start with <code>dts fleet discover</code> to make sure that
                    your Duckiebot is on and connected to the internet, take note of the
                    name. Beyond that, just replace the robot name above with the
                    physical
                    robot's name from the fleet discovery, and you're good to go!
                    To turn off the physical robot, run:
                    <code>dts duckiebot shutdown ROBOT_NAME</code>.

                    You can also go to: <code>ROBOT_NAME.local/dashboard/robot</code>
                    in your web browser to see the robot's status and some
                    additional info.
                </p>

                <p>
                    That's it! You now know how to stream data from the X.on headset and
                    control the robot - the rest is up to you!
                </p>
            </ContentSection>
            <br /><br /><br />
        </div>
    );
};

export default HackathonMaterialsPage;
