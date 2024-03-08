import React from 'react';

class EventPhoto extends React.Component {
    render() {
        return (
            <div className="tile is-child is-img-tile ">
            <figure className={"image is-" + this.props.img_shape}>
              <img className="event-photo" src={this.props.img} />
            </figure>
          </div>
        );
}
}



class EventSummary extends React.Component {
  render() {
    return (
<div className="event-summary">
      <a className="fancy-title clean-link" id="event-summary"
        href="#event-summary">Event Summary</a>

      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child">
            {this.props.description}
          </div>

        </div>
        <div className="tile is-parent">
          <div className="tile is-child is-photos-tile">
            <div className="tile is-parent">
              <div className="tile is-4 is-vertical is-parent">
                <EventPhoto img_shape="square" img={this.props.img_square}/>
                <EventPhoto img_shape="4x5" img={this.props.img_4x5} />
              </div>
              <div className="tile is-parent is-vertical">
              <EventPhoto img_shape="4x3" img={this.props.img_4x3} />
                <EventPhoto img_shape="3x1" img={this.props.img_3x1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
    }
}

export default EventSummary;