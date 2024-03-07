import React from 'react';

class LandingEvent extends React.Component {
    render() {
      // Check if data is loaded
      if (!this.props.title) {
        return <div>Loading...</div>;
      }
      
      return (
          <a href={this.props.url} className="event-link" target="_blank">
            <div className={"event event-" + this.props.color}>
              <div className="event-content">
                <p className="event-title">{this.props.title}</p>
                <p className="event-description ">{this.props.description}</p>
                <div className="event-info vert-on-mobile">
                  <div className="columns">
                    <div className="column is-4">
                      {this.props.date}
                    </div>
                  </div>
  
                </div>
              </div>
  
              {this.props.img &&
                <div className="event-img">
                  <img src={this.props.img}
                    alt={this.props.img_alt} />
                </div>
              }
            </div>
          </a>
        );
      }
  }


export default LandingEvent;