import React from 'react';


import {Blue, Red} from './Highlights'


class VideoOrImg extends React.Component {
    render() {
        return (
            <div>
                <div className="videocontainer has-text-centered">
                    <video width="640" height="360" autoPlay loop
                    style={{"borderRadius": "15px"}}
                    >
                    <source src={this.props.video}
                        type="video/mp4"/>
                    Your browser does not support the video tag.
                    </video>
                </div>

                
                <div className="imgcontainer-mobile">
                    <img src={this.props.img} alt={this.props.img_alt}/>
                </div>
            </div>
        );
    }
}


class CardVideo extends React.Component {
  render() {
    return (
        <div className="hardware-card">
            <h1 className="hardware-title">{this.props.title}</h1>
            <VideoOrImg
                video = {this.props.video}
                img = {this.props.img}
                img_alt = {this.props.img_alt}
            />
            <p>
                {this.props.children}
            </p>
        </div>
      );
    }
}


class CardImage extends React.Component {
    render() {
      return (
          <div className="hardware-card whitebg">
              <h1 className="hardware-title">{this.props.title}</h1>
              <div className="imgcontainer">
                <img src={this.props.img} alt={this.props.img_alt} />
              </div>
              <p>
                  {this.props.children}
              </p>
          </div>
        );
      }
  }

export {CardVideo, CardImage};